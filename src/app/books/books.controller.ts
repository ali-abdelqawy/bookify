import { Body, JsonController, OnUndefined, Post } from "routing-controllers";
import { BooksService } from "./books.service";
import { InsertBookDto } from "./dto";
import { AuthorsService } from "../authors";

@JsonController("/books", { transformResponse: false })
export class BooksController {
  private service: BooksService;

  constructor() {
    this.service = new BooksService(new AuthorsService());
  }

  @Post()
  @OnUndefined(STATUS_CODES.CREATED)
  async insertOne(@Body() body: InsertBookDto) {
    await this.service.insertOne(body);
  }
}
