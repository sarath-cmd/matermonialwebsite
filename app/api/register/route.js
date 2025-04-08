import { NextResponse } from "next/server";
import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";
import bcrypt from 'bcryptjs'

export async function POST(req) {
  try {
    if (!req.formData) {
      throw new Error("Request does not contain formData");
    }

    const data = await req.formData();
    const email = data.get('email')
    const password = data.get('password')
    const userPhoto = data.get('userPhoto');
    if (!userPhoto) throw new Error("User photo is missing");
    const userPhotoBytes = await userPhoto.arrayBuffer();
    const userPhotoBuffer = Buffer.from(userPhotoBytes);
    const userbase64 = userPhotoBuffer.toString('base64')

    const idProof = data.get('idproof');
    if (!idProof) throw new Error("ID proof is missing");
    const idProofBytes = await idProof.arrayBuffer();
    const idProofBuffer = Buffer.from(idProofBytes);
    const idproofbase64 = idProofBuffer.toString('base64')

    const hashedpassword = await bcrypt.hash(password, 10);
    const generateUniqueUserId = async () => {
      while (true) {
        const userId = Math.floor(Math.random() * 99000) + 1001; // Generate a random ID > 1000 and less than 1lack
        const existingUserId = await User.findOne({ userId });
        if (!existingUserId) {
          return userId;
        }
      }
    };
    const userId = await generateUniqueUserId()

    const userData = {
      userID: userId,
      name: data.get('name'),
      email: data.get('email'),
      password: hashedpassword,
      gender: data.get('gender'),
      dob: data.get('dob'),
      tob: data.get('tob'),
      cast: data.get('cast'),
      kulam: data.get('kulam'),
      gothram: data.get('gothram'),
      district: data.get('district'),
      education: data.get('education'),
      occupation: data.get('occupation'),
      salary: data.get('salary'),
      maritalstatus: data.get('maritalstatus'),
      partnerpreference: data.get('partnerPreference'),
      mobileno: data.get('mobileno'),
      userphoto: userbase64,
      idproof: idproofbase64,
      fathername: data.get('fatherName'),
      fatheroccupation: data.get('fatherOccupation'),
      mothername: data.get('motherName'),
      motheroccupation: data.get('motherOccupation'),
      asset: data.get('asset'),
      address: data.get('address'),
      nativeplace: data.get('nativePlace'),
      parentnumber: data.get('parentNumber'),
      numberofbrosis: data.get('broSis'),
      elderoryounger: data.get('elderYounger'),
      rasi: data.get('rasi'),
      nakshartram: data.get('nakshartram'),
      paadham: data.get('paadham'),
      dhosam: data.get('dhosam'),
      t1r1c1: data.get('t1r1c1'),
      t1r1c2: data.get('t1r1c2'),
      t1r1c3: data.get('t1r1c3'),
      t1r1c4: data.get('t1r1c4'),
      t1r2c1: data.get('t1r2c1'),
      t1r2c4: data.get('t1r2c4'),
      t1r3c1: data.get('t1r3c1'),
      t1r3c4: data.get('t1r3c4'),
      t1r4c1: data.get('t1r4c1'),
      t1r4c2: data.get('t1r4c2'),
      t1r4c3: data.get('t1r4c3'),
      t1r4c4: data.get('t1r4c4'),
      t2r1c1: data.get('t2r1c1'),
      t2r1c2: data.get('t2r1c2'),
      t2r1c3: data.get('t2r1c3'),
      t2r1c4: data.get('t2r1c4'),
      t2r2c1: data.get('t2r2c1'),
      t2r2c4: data.get('t2r2c4'),
      t2r3c1: data.get('t2r3c1'),
      t2r3c4: data.get('t2r3c4'),
      t2r4c1: data.get('t2r4c1'),
      t2r4c2: data.get('t2r4c2'),
      t2r4c3: data.get('t2r4c3'),
      t2r4c4: data.get('t2r4c4'),
    };

    await dbconnect();
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json({ success: false, error: "Email already exists, please try another email" });
    }
    await User.create(userData);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
