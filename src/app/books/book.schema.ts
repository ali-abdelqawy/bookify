import { Schema, Types, model } from "mongoose";

const BookSchema = new Schema(
  {
    name: String,
    pages: Number,
    author_id: {
      type: Types.ObjectId,
      ref: "Author",
    },
  },
  {
    timestamps: true,
  }
);

export const Book = model("Book", BookSchema);
