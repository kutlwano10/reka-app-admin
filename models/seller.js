import mongoose, { Schema } from "mongoose";

const sellerSchema = new Schema(
  {
    user : Object,
    shopName: String,
    shopDescription: String,
    address: Object,
    phone: String,
    email: String,
    shop: String

  },
  { timestamps: true }
);


const Seller = mongoose.models.Seller  || mongoose.model("Seller", sellerSchema);


export default Seller