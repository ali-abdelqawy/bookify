import { IsDecimal, IsMongoId, IsNotEmpty } from "class-validator";

export class InsertStoreBookDto {
  @IsNotEmpty()
  @IsMongoId()
  store_id: string;

  @IsNotEmpty()
  @IsMongoId()
  book_id: string;

  @IsNotEmpty()
  @IsDecimal({
    decimal_digits: "2",
  })
  priceEgp: string;
}
