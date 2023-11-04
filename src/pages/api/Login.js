import UserModel from "@/component/User.Model";
import { compare } from "bcrypt";
import connect from "@/component/db";
import { sign } from "jsonwebtoken";

const home = async (req, res) => {
    if (req.method === "POST") {
        const { email, password } = req.body;
        try {
            await connect();
            const user = await UserModel.findOne({ email });
            if (user) {
                if (await compare(password, user.password)) {
                    const token = sign(user.id, process.env.JWT_SECRET);
                    res.status(200).json({ status: true, user, token });
                } else {
                    res.status(401).json({
                        status: false,
                        message: "Password is invalid",
                    });
                }
            } else {
                res.status(401).json({
                    status: false,
                    message: "user not exists",
                });
            }
        } catch (err) {
            console.log("error in catch");
            res.status(500).json(err);
        }
    } else {
        res.status(500).json({ status: false });
    }
};

export default home;
