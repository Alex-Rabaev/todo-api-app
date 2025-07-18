import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  text: text("text").notNull(),
  status: text("status", { enum: ["in progress", "completed"] }).notNull(),
});