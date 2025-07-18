import express from "express";
import taskRoutes from "./routes/taskRoutes.ts";

const app = express();
app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});