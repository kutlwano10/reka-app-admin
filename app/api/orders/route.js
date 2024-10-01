import { connectToMongoDB } from "@/lib/mongodb"
import Bought from "@/models/bought"
import { NextResponse } from "next/server"

export async function GET() {
    await connectToMongoDB()
    const bought = await Bought.find()
    return NextResponse.json({bought})

}