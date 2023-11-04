import UserModel from "@/component/User.Model";
import { verify } from "jsonwebtoken";
import connect from "@/component/db";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { token } = req.body;
        await connect();
        const id = verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(id);
        if (user) {
            res.status(200).json({ status: true, user });
        } else {
            res.status(401).json({ status: false });
        }
    }
};

export default handler;
