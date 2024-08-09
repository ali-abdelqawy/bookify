import { IsMongoId, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class InsertBookDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsPositive()
  pages: number;

  @IsNotEmpty()
  @IsMongoId()
  author_id: number;
}
