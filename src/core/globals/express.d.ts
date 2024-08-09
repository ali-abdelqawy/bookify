import { Algorithm } from "jsonwebtoken";
import { FormattedFilter } from "../types";

declare global {
  namespace Express {
    interface Locals {
      filter: FormattedFilter;
    }
  }
}
