import postRouter from "./postRouter.js";

const route = (app) => {
    app.use("/api/post", postRouter);
};

export default route;
