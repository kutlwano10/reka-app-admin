import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    description: String,
    images : String,
    price : String,
    category: String,
    
  },
  { timestamps: true }
);

/**
 * i am Creating a model for My database {model():is like seItems on localStorage} ,which is the container of all the Products
 * I store everything on Product
 */
const Product = mongoose.models.Product  || mongoose.model("Product", productSchema);


export default Product