import { Body, Get, JsonController, OnUndefined, Post, QueryParams } from "routing-controllers";
import { StoreBooksService } from "./store-books.service";
import { FindStoreBooksDto, InsertStoreBookDto } from "./dto";
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

  @Get()
  async findMany(@QueryParams() query: FindStoreBooksDto) {
    return this.service.findMany(query);
  }
}
