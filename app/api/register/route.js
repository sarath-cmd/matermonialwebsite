import { NextResponse } from "next/server";
import { dbconnect } from "@/lib/dbconnect";
import User from "@/lib/model/registermodel";

export async function POST(req) {
  try {
    if (!req.formData) {
      throw new Error("Request does not contain formData");
    }

    const data = await req.formData();
    const userPhoto = data.get('userPhoto');
    if (!userPhoto) throw new Error("User photo is missing");
    const userPhotoBytes = await userPhoto.arrayBuffer();
    const userPhotoBuffer = Buffer.from(userPhotoBytes);

    const idProof = data.get('idproof');
    if (!idProof) throw new Error("ID proof is missing");
    const idProofBytes = await idProof.arrayBuffer();
    const idProofBuffer = Buffer.from(idProofBytes);

    const userData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
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
      partnerPreference: data.get('partnerPreference'),
      mobileno: data.get('mobileno'),
      fatherName: data.get('fatherName'),
      fatherOccupation: data.get('fatherOccupation'),
      motherName: data.get('motherName'),
      motherOccupation: data.get('motherOccupation'),
      asset: data.get('asset'),
      address: data.get('address'),
      nativePlace: data.get('nativePlace'),
      parentNumber: data.get('parentNumber'),
      broSis: data.get('broSis'),
      elderYounger: data.get('elderYounger'),
      rasi: data.get('rasi'),
      nakshartram: data.get('nakshartram'),
      paadham: data.get('paadham'),
      dhosam: data.get('dhosam'),
      userPhoto: userPhotoBuffer,
      idproof: idProofBuffer,
    };

    await dbconnect();
    await User.create(userData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
