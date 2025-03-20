import { dbconnect } from "@/lib/dbconnect";
import Admin from "@/lib/model/adminmodel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbconnect();
        const { email, password, passkey } = await req.json();
        const secret = process.env.ADMIN_REGISTER_KEY
        if(secret !== passkey) {
            return NextResponse.json({
                success: false,
                error: "Passkey value missmatch",
            },{ status: 401 });
        }
        const existingAdmin = await Admin.findOne({ email: email });
        if (existingAdmin) {
            return NextResponse.json({
                success: false,
                error: "Email already exists, please try another email",
            },{ status: 409 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const adminData = {
            role: "admin",
            email: email,
            password: hashedPassword,
        };
        await Admin.create(adminData);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error occurred:", error);
    }
}
