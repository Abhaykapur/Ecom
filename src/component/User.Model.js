import mongoose from "mongoose";
import { isEmail } from "validator";

const user = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validator: [isEmail, "Email is invalid"],
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password should be 6 character long"],
    },
});

export default mongoose.models.User || mongoose.model("User", user);
