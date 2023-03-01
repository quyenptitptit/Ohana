import postRouter from "./postRouter.js";
import authRouter from './authRoute.js';
import userRouter from "./userRoute.js";

const route = (app) => {
    app.use("/api/auth", authRouter);
    app.use("/api/user", userRouter);
    app.use("/api/post", postRouter);
};

export default route;
