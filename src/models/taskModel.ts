import { db } from "../db/index";
import { tasks } from "../schema/tasks";
import { eq } from "drizzle-orm";

export class TaskModel {
  static async create(text: string, status: "in progress" | "completed") {
    const inserted = await db.insert(tasks).values({ text, status }).returning();
    return inserted[0];
  }

  static async updateStatus(id: number, status: "in progress" | "completed") {
    const result = await db.update(tasks)
      .set({ status })
      .where(eq(tasks.id, id));
    return result.changes;
  }

  static async delete(id: number) {
    const result = await db.delete(tasks).where(eq(tasks.id, id));
    return result.changes;
  }

  static async getTasksByStatusOrAll(status?: "in progress" | "completed") {
    if (status) {
      return await db.select().from(tasks).where(eq(tasks.status, status));
    }
    return await db.select().from(tasks);
  }
}