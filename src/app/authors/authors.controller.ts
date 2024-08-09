import { Body, JsonController, OnUndefined, Post } from "routing-controllers";
import { AuthorsService } from "./authors.service";
import { InsertAuthorDto } from "./dto";

@JsonController("/authors", { transformResponse: false })
export class AuthorsController {
  private service: AuthorsService;

  constructor() {
    this.service = new AuthorsService();
  }

  @Post()
  @OnUndefined(STATUS_CODES.CREATED)
  async insertOne(@Body() body: InsertAuthorDto) {
    await this.service.insertOne(body);
  }
}
