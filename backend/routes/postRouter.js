import express from "express";
import { createPost } from "../controllers/postController.js";

const postRouter = express.Router();

// postRouter.delete("/:id", deleteTodo);
// postRouter.put("/:id", updateTodo);
postRouter.post("/create", createPost);
// postRouter.get("/", getAllTodos);

export default postRouter;
