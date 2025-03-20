import mongoose, { Schema, models } from "mongoose";

const adminSchema = new Schema({
    role: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
})


const Admin = models?.Admin || mongoose.model("Admin", adminSchema)
export default Admin;