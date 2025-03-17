import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: "",
            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await dbconnect();
                    const user = await User.findOne({ email }, 'email password');
                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.error(error);
                    throw new Error('Failed to authorize');
                }
            }            
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    },
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};