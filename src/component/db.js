import mongoose from "mongoose";

mongoose.connection.once("open", () => {
    console.log("db connected");
});

mongoose.connection.on("error", (err) => {
    console.log(`Error: ${err}`);
});

const URI = process.env.MONGOURL.replace(
    "<password>",
    process.env.MONGOPASSWORD
);

const connect = async () => {
    try {
        await mongoose.connect(URI);
    } catch (err) {
        throw new Error("Connection failed");
    }
};

export default connect;
