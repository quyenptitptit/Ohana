import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://TrungVan1904:TrungVan1904@mycluster.96efpsw.mongodb.net/Ohana_Clone";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connect successfully!");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
