import mongoose from "mongoose";

const genderSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
});

const Gender = mongoose.model("gender", genderSchema);

export default Gender;
