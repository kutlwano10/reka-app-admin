import {connectToMongoDB} from "@/lib/mongodb";
import Seller from "@/models/seller";
import { NextResponse } from "next/server";

/**
 *
 * @param {POST} request - i am creating a request to add this Seller to the database
 */

export async function POST(request) {
  const { userId ,shopName, shopDescription,address, phone,email} = await request.json();
  await connectToMongoDB();
  /**
   * This will create the new Products
   */
  await Seller.create({ userId ,shopName, shopDescription , address, phone,email});
  return NextResponse.json({message: 'Shop created'} , {status: 201})
}
