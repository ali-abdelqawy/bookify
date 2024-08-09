import { InsertBookDto } from "./dto";
import { Book } from "./book.schema";
import { AuthorsService } from "../authors";
import { HttpException } from "../../core/utils";

export class BooksService {
  private authorsService: AuthorsService;

  constructor(authorsService: AuthorsService) {
    this.authorsService = authorsService;
  }

  async insertOne(body: InsertBookDto) {
    const authorExists = await this.authorsService.exists({ _id: body.author_id });
    if (!authorExists) {
      throw new HttpException(404, "Author not found");
    }
    await Book.create(body);
  }

  async exists(filter: any) {
    return Book.exists(filter);
  }
}
