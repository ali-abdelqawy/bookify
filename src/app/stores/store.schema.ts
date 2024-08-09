import { Schema, model } from "mongoose";

const StoreSchema = new Schema(
  { name: String, address: String },
  {
    timestamps: true,
  }
);

export const Store = model("Store", StoreSchema);
