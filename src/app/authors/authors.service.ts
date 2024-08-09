import { InsertAuthorDto } from "./dto";
import { Author } from "./author.schema";

export class AuthorsService {
  async insertOne(body: InsertAuthorDto) {
    await Author.create(body);
  }
}
