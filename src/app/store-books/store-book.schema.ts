import { Schema, Types, model } from "mongoose";

const StoreBookSchema = new Schema(
  {
    store_id: {
      type: Types.ObjectId,
      ref: "Store",
    },
    book_id: {
      type: Types.ObjectId,
      ref: "Book",
    },
    priceEgp: Types.Decimal128,
  },
  {
    timestamps: true,
  }
);

export const StoreBook = model("StoreBook", StoreBookSchema);
