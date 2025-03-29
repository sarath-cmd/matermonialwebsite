import User from "@/lib/model/registermodel";
import { dbconnect } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbconnect();
        const body = await req.json();
        const { userID, newViewLimit } = body;
        const user = await User.findOneAndUpdate({ userID }, { $set: { viewlimit: newViewLimit } }, { new: true });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "View limit updated successfully", user });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error updating view limit" }, { status: 500 });
    }
}
