import { HttpException } from "../../core/utils";
import { BooksService } from "../books";
import { StoresService } from "../stores";
import { FindStoreBooksDto, InsertStoreBookDto } from "./dto";
import { StoreBook } from "./store-book.schema";

export class StoreBooksService {
  private booksService: BooksService;
  private storesService: StoresService;

  constructor(booksService: BooksService, storesService: StoresService) {
    this.booksService = booksService;
    this.storesService = storesService;
  }

  async insertOne(body: InsertStoreBookDto) {
    const [bookExists, storeExists] = await Promise.all([
      this.booksService.exists({ _id: body.book_id }),
      this.storesService.exists({ _id: body.store_id }),
    ]);

    if (!bookExists) {
      throw new HttpException(404, "Book not found");
    }

    if (!storeExists) {
      throw new HttpException(404, "Store not found");
    }

    await StoreBook.create(body);
  }

  async findMany(query: FindStoreBooksDto) {
    const storeBooks = await StoreBook.find({ store_id: query.store_id });
    return { storeBooks };
  }
}
