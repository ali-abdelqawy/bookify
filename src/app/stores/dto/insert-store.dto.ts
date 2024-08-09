import { IsNotEmpty, IsString } from "class-validator";

export class InsertStoreDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
