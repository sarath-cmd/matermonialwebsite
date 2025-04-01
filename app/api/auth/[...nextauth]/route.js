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
                    const user = await User.findOne({ email }, 'email password userID viewlimit');
                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch) {
                        return null;
                    }
                    return { userID: user.userID, viewlimit: user.viewlimit };
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
        signIn: "/",
        signOut: '/dashboard/userprofile'
    },
    callbacks: {
        async jwt({ token, user }) {
            // Add userID to the token if they exist
            if (user) {
                token.userID = user.userID;
                token.viewlimit = user.viewlimit
            }
            return token;
        },
        async session({ session, token }) {
            // Add userID to the session user object
            if (token) {
                session.user = {
                    ...session.user,
                    userID: token.userID,
                    viewlimit: token.viewlimit
                };
            }
            return session;
        }
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};