import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbconnect()
        const user = await User.find().select('name education occupation userphoto userID district').sort({ createdAt: -1 });
        return NextResponse.json({users: user})
    } catch (error) {
        console.log(error)
    }
}