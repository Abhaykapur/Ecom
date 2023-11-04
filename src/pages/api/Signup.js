import UserModel from "@/component/User.Model";
import connect from "@/component/db";
import { genSalt, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

const Signup = async (req, res) => {
    if (req.method === "POST") {
        const { name, email, password } = req.body;
        try {
            await connect();
            const salt = await genSalt();
            const hashedPassword = await hash(password, salt);
            const user = await UserModel.create({
                name,
                email,
                password: hashedPassword,
            });
            const token = sign(user.id, process.env.JWT_SECRET);

            res.status(200).json({
                status: true,
                user,
                token,
            });
        } catch (err) {
            res.status(500).json({
                status: false,
                message: "Error in creating user",
            });
        }
    } else {
        res.status(500).json({ status: false, message: "bad request" });
    }
};

export default Signup;
