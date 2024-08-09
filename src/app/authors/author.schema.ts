import { Schema, model } from "mongoose";

const AuthorSchema = new Schema(
  { name: String },
  {
    timestamps: true,
  }
);

export const Author = model("Author", AuthorSchema);
