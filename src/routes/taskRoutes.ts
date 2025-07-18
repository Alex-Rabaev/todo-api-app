import { Router } from "express";
import {
    createTask,
    deleteTask,
    getTasks,
    updateTaskStatus
  } from "../controllers/taskController.ts";

const router = Router();

router.post("/", createTask);
router.put("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);
router.get("/", getTasks);

export default router;