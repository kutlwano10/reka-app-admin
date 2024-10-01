import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    shopId: {type: mongoose.Schema.Types.ObjectId, ref: 'Shop'},
    title: String,
    description: String,
    images : String,
    price : String,
    category: String,
    stock : Number,

    
  },
  { timestamps: true }
);

/**
 * i am Creating a model for My database {model():is like seItems on localStorage} ,which is the container of all the Products
 * I store everything on Product
 */
const Product = mongoose.models.Product  || mongoose.model("Product", productSchema);


export default Product