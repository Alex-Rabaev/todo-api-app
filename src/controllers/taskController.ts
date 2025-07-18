import { Request, Response } from "express";
import { TaskModel } from "../models/taskModel.ts";

const validStatuses = ["in progress", "completed"] as const;
type Status = (typeof validStatuses)[number];

const isValidStatus = (status: any): status is Status => {
  return validStatuses.includes(status);
};

export const createTask = async (req: Request, res: Response) => {
  const { text, status } = req.body;

  if (!text || !status) {
    return res.status(400).json({ error: "Missing 'text' or 'status' field." });
  }

  if (!isValidStatus(status)) {
    return res.status(400).json({
      error: `'status' must be one of: ${validStatuses.join(", ")}`
    });
  }

  const task = await TaskModel.create(text, status);
  res.status(201).json(task);
};

export const updateTaskStatus = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  if (!isValidStatus(status)) {
    return res.status(400).json({
      error: `'status' must be one of: ${validStatuses.join(", ")}`
    });
  }

  const updated = await TaskModel.updateStatus(id, status);
  if (!updated) return res.status(404).json({ error: "Not found" });
  res.json({ message: "Updated" });
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await TaskModel.delete(id);
  if (!deleted) return res.status(404).json({ error: "Not found" });
  res.json({ message: "Deleted" });
};

export const getTasksByStatusOrAll = async (req: Request, res: Response) => {
  const { status } = req.query;

  if (status && !isValidStatus(status)) {
    return res.status(400).json({
      error: `'status' query parameter must be one of: ${validStatuses.join(", ")}`
    });
  }

  const tasks = await TaskModel.getTasksByStatusOrAll(status as Status);
  res.json(tasks);
};