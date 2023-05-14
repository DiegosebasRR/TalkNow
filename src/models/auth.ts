import { User } from "../interfaces/user.interface";
import { Schema, model } from "mongoose";

const UserSchema = new Schema<User>({
  firtName: { type: String },
  lastName: { type: String, required: true },
  birthDate: { type: String, required: true },
  telephone: { type: Number, required: true },
  gender: { type: String, required: true, enum: ["male", "female"] },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model("users", UserSchema);

export default UserModel;
