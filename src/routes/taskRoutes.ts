import express from "express";
import {
  createTaskHandler,
  deleteTaskHandler,
  getSortedTaskListHandler,
  getTaskListHandler,
  updateSortNumberHandler,
  updateTaskHandler,
} from "../controllers/taskController";
import authMiddleware from "../middlewares/authMiddleware";

const router = express.Router();
router.post("/tasks", authMiddleware, createTaskHandler);
router.get("/tasks", authMiddleware, getTaskListHandler);
router.delete("/tasks/:taskId", authMiddleware, deleteTaskHandler);
router.get("/tasks/sorted", authMiddleware, getSortedTaskListHandler);
router.put("/tasks/:taskId", authMiddleware, updateTaskHandler);

router.post("/tasks/update-sort", authMiddleware, updateSortNumberHandler);

export default router;
