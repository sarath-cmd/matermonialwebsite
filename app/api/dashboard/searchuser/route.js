import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await dbconnect();
        const { userID } = await req.json();
        const user = await User.findOne({ userID }, 'name education occupation userphoto userID district');
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ user });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
