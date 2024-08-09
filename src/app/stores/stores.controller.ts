import { Body, JsonController, OnUndefined, Post } from "routing-controllers";
import { StoresService } from "./stores.service";
import { InsertStoreDto } from "./dto";

@JsonController("/stores", { transformResponse: false })
export class StoresController {
  private service: StoresService;

  constructor() {
    this.service = new StoresService();
  }

  @Post()
  @OnUndefined(STATUS_CODES.CREATED)
  async insertOne(@Body() body: InsertStoreDto) {
    await this.service.insertOne(body);
  }
}
