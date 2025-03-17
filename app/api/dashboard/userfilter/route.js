import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbconnect();
        const { district, gender, education, dhosam, maritalstatus } = await req.json();
        const query = {};
        if (district) query.district = district;
        if (gender) query.gender = gender;
        if (education) query.education = education;
        if (dhosam) query.dhosam = dhosam;
        if (maritalstatus) query.maritalstatus = maritalstatus;

        const Users = await User.find(query, 'name education occupation userphoto _id district');
        return NextResponse.json({ users: Users });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred while fetching profiles." });
    }
}