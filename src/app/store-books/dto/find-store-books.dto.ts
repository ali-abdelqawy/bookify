import { IsMongoId, IsNotEmpty } from "class-validator";

export class FindStoreBooksDto {
  @IsNotEmpty()
  @IsMongoId()
  store_id: string;
}
