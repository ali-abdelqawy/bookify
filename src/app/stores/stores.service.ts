import { InsertStoreDto } from "./dto";
import { Store } from "./store.schema";

export class StoresService {
  async insertOne(body: InsertStoreDto) {
    await Store.create(body);
  }
}
