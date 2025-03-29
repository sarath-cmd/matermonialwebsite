import User from "@/lib/model/registermodel";
import { dbconnect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbconnect()
        const {userID} = await req.json()
        const user = await User.find({userID}).select('userID viewlimit name gender maritalstatus userphoto')
        if(!user) {
            return NextResponse.json({success: false, message: 'user not found'},{status: 401})
        }
        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}