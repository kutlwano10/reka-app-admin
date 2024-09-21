import {connectToMongoDB} from "@/lib/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

/**
 *
 * @param {POST} request - i am creating a request to add this Products to the database
 */

export async function POST(request) {
  const { title, description, images , price, category} = await request.json();
  await connectToMongoDB();
  /**
   * This will create the new Products
   */
  await Product.create({ title, description , images, price,category});
  return NextResponse.json({message: "Product Created"} , {status: 201})
}

/**
 * 
 * @returns all the List of Products
 */
export async function GET() {
    await connectToMongoDB()
    const products = await Product.find()
    return NextResponse.json({products})

}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectToMongoDB()
    await Product.findByIdAndDelete(id)
    return NextResponse.json({message: "Product Deleted"}, {status: 201})
}

// export async function DELETE() {
    
//     await connectToMongoDB()
//     await Product.deleteMany()
//     return NextResponse.json({message: "Product Deleted"}, {status: 201})
// }
