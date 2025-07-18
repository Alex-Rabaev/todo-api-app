import { Router } from "express";
import {
    createTask,
    deleteTask,
    getTasksByStatusOrAll,
    updateTaskStatus
  } from "../controllers/taskController";

const router = Router();

router.post("/", createTask);
router.put("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);
router.get("/", getTasksByStatusOrAll);

export default router;