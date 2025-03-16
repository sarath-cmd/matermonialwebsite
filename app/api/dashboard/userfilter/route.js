import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbconnect();
        const { district, education, dhosam } = await req.json();
        const query = {};
        if (district) query.district = district;
        if (education) query.education = education;
        if (dhosam) query.dhosam = dhosam;

        const Users = await User.find(query, 'name education occupation userphoto _id');
        console.log(Users);
        return NextResponse.json({ users: Users });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred while fetching profiles." });
    }
}