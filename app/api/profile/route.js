import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbconnect();
    const { userID, loginuser } = await req.json();
    const findlogeduser = await User.findOne({ userID:loginuser }, 'viewlimit');
    if (!findlogeduser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    if(findlogeduser.viewlimit > 0) {
      const newviewlimit = findlogeduser.viewlimit - 1
      const logeduserviewupdate = await User.findOneAndUpdate({ userID:loginuser }, { $set: { viewlimit: newviewlimit }})
      const user = await User.findOne({ userID });
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      return NextResponse.json({ user, newviewlimit });
    } 
    if(findlogeduser.viewlimit === 0) {
      return NextResponse.redirect(new URL('/upgrade', req.url));
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
