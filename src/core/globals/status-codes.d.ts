import { Db } from "../db";
import { Mongoose } from "mongoose";

declare global {
  var STATUS_CODES: { OK: 200; CREATED: 201; UNAUTHORIZED: 401; FORBIDDEN: 403 };
  var db: Mongoose;
}

export {};
