import { Request, Response } from "express";
import { TaskModel } from "../models/taskModel.ts";

export const createTask = async (req: Request, res: Response) => {
  const { text, status } = req.body;
  if (!text || !status) return res.status(400).json({ error: "Missing fields" });

  const task = await TaskModel.create(text, status);
  res.status(201).json(task);
};

export const updateTaskStatus = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { status } = req.body;
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
  const tasks = await TaskModel.getTasksByStatusOrAll(status as any);
  res.json(tasks);
};