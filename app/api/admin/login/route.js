import { dbconnect } from "@/lib/dbconnect";
import Admin from "@/lib/model/adminmodel";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbconnect()
        const {email, password, passkey} = await req.json()
        const secret = process.env.ADMIN_LOGIN_KEY
        if(secret !== passkey) {
            return NextResponse.json({
                success: false,
                error: "Passkey value missmatch",
            },{ status: 401 });
        }
        const admin = await Admin.findOne({ email: email })
        const passwordmatch = await bcrypt.compare(password, admin.password)
        if (!passwordmatch) {
            return null;
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error)
    }
}