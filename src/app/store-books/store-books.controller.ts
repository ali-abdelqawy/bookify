import { Body, JsonController, OnUndefined, Post } from "routing-controllers";
import { StoreBooksService } from "./store-books.service";
import { InsertStoreBookDto } from "./dto";
import { BooksService } from "../books";
import { StoresService } from "../stores";
import { AuthorsService } from "../authors";

@JsonController("/store-books", { transformResponse: false })
export class StoreBooksController {
  private service: StoreBooksService;

  constructor() {
    this.service = new StoreBooksService(new BooksService(new AuthorsService()), new StoresService());
  }

  @Post()
  @OnUndefined(STATUS_CODES.CREATED)
  async insertOne(@Body() body: InsertStoreBookDto) {
    await this.service.insertOne(body);
  }
}
