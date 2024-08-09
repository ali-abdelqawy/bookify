import { IsNotEmpty, IsString } from "class-validator";

export class InsertAuthorDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
