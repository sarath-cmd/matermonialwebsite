import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    gender: {type: String, require: true},
    dob: {type: Date, require: true},
    tob: {type: String, require: true},
    cast: {type: String, require: true},
    kulam: {type: String, require: true},
    gothram: {type: String, require: true},
    district: {type: String, require: true},
    education: {type: String, require: true},
    occupation: {type: String, require: true},
    salary: {type: Number, require: true},
    maritalstatus: {type: String, require: true},
    partnerpreference: {type: String, require: true},
    mobileno: {type: Number, require: true},
    userphoto: {type: Array, require: true},
    idproof: {type: Array, require: true},
    fathername: {type: String, require: true},
    fatheroccupation: {type: String, require: true},
    mothername: {type: String, require: true},
    motheroccupation: {type: String, require: true},
    asset: {type: String, require: true},
    address: {type: String, require: true},
    nativeplace: {type: String, require: true},
    parentnumber: {type: Number, require: true},
    numberofbrosis: {type: Number, require: true},
    elderoryounger: {type: String, require: true},
    rasi: {type: String, require: true},
    nakshartram: {type: String, require: true},
    paadham: {type: String, require: true},
    dhosam: {type: String, require: true},
})

const User = models?.User || mongoose.model("User", userSchema)
export default User;