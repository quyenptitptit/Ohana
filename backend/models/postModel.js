import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    capacity: {
        type: Number,
        require: true,
    },
    gender: {
        type: String,
        ref: "gender",
    },
    rentalPrice: {
        type: Number,
        require: true,
    },
    deposit: {
        type: Number,
        require: true,
    },
    electricityCost: {
        type: Number,
        require: true,
    },
    waterCost: {
        type: Number,
        require: true,
    },
    internetCost: {
        type: Number,
        require: true,
    },
    parkingSpace: {
        available: {
            type: Boolean,
            require: true,
        },
        cost: {
            type: Number,
        },
    },
});

const Post = mongoose.model("post", postSchema);

export default Post;
