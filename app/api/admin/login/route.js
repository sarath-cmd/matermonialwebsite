import { dbconnect } from "@/lib/dbconnect";
import Admin from "@/lib/model/adminmodel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await dbconnect();

        const { email, password, passkey } = await req.json();

        const secret = process.env.ADMIN_LOGIN_KEY;

        if (secret.trim() !== passkey.trim()) {
            return NextResponse.json({
                success: false,
                error: "Passkey value mismatch",
            }, { status: 401 });
        }

        const admin = await Admin.findOne({ email: email });
        if (!admin) {
            return NextResponse.json({
                success: false,
                error: "Admin not found",
            }, { status: 404 });
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return NextResponse.json({
                success: false,
                error: "Invalid credentials",
            }, { status: 401 });
        }

        // Generate a JWT token
        const token = jwt.sign({ role: admin.role, email: admin.email }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
        return NextResponse.json({
            success: true,
            token,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            error: "Internal Server Error",
        }, { status: 500 });
    }
}
