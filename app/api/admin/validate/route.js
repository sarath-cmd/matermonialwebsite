import jwt from 'jsonwebtoken';
import Admin from "@/lib/model/adminmodel";
import { dbconnect } from "@/lib/dbconnect";
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await dbconnect();

        const body = await req.json();
        const token = body.token;

        if (!token) {
            return NextResponse.json({
                success: false,
                error: 'No token provided',
            }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decoded || decoded.role !== 'admin') {
            return NextResponse.json({
                success: false,
                error: 'Unauthorized',
            }, { status: 403 });
        }

        const admin = await Admin.findOne({ email: decoded.email });
        if (!admin) {
            return NextResponse.json({
                success: false,
                error: 'Admin user not found in the database',
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            role: decoded.role,
            email: decoded.email,
            message: 'User validated successfully',
        });
    } catch (error) {
        console.error('Validation error:', error);
        return NextResponse.json({
            success: false,
            error: 'Invalid token or server error',
        }, { status: 500 });
    }
}
