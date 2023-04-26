import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  profileImg: { type: String, default: "" },
  address: { type: String },
  cardNumber: { type: Number },
});

const User = model("User", userSchema);

export default User;
