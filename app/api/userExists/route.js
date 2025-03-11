import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await dbconnect();
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id");
        console.log(user)
        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
    }
}