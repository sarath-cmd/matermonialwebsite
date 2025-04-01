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

export async function PUT(req) {
    try {
        await dbconnect()
        const { userID, cast, kulam, gothram, education, district, mobileno, asset, address } = await req.json();
        const query = {}
        if(cast) query.cast = cast
        if(kulam) query.kulam = kulam
        if(gothram) query.gothram = gothram
        if(education) query.education = education
        if(district) query.district = district
        if(mobileno) query.mobileno = mobileno
        if(asset) query.asset = asset
        if(address) query.address = address
        const updatedUser = await User.findOneAndUpdate({ userID }, { $set: query }, { new: true });
        if (!updatedUser) {
            return NextResponse.json({ error: "User not found." });
        }
        return NextResponse.json({ message: "User updated successfully.", user: updatedUser });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred while fetching profiles." });
    }
}

export async function DELETE(req) {
    try {
        await dbconnect();
        const { userID, email } = await req.json();
        if (!userID || !email) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }
        const user = await User.findOneAndDelete({ userID, email });
        if (user) {
            return NextResponse.redirect(new URL('/login', req.url));
        } else {
            return NextResponse.json({ error: "User not found." }, { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 });
    }
}