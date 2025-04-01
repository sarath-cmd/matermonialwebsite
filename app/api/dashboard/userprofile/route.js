import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbconnect();
        const { userID, email } = await req.json();
        const Users = await User.find({ userID, email });
        if (!Users) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        return NextResponse.json({ users: Users });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred while fetching profiles." });
    }
}
