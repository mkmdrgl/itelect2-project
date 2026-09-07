import express from "express";
import db from "../models/index.cjs";

const { Task, User } = db;
const router = express.Router();

let cachedUsers = [];

fetchSampleUsers().then((users) => {
  cachedUsers = users;
});

router.get("/tasks", (req, res) => {
  res.json(tasks);
});

router.get("/tasks/:id", (req, res) => {
  const taskId = req.params.id; 
  const task = tasks.find((t) => t.id === taskId || t.id === Number(taskId));

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

router.post("/tasks", (req, res, next) => {
  if (!validateTask(req.body)) {
    const err = new Error("title required");
    err.status = 400;
    return next(err);
  }
  const task = createTask(req.body);
  tasks.push(task);
  res.status(201).json(task);
});

router.put("/tasks/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    const err = new Error("Task not found");
    err.status = 404;
    return next(err);
  }
  tasks[index] = { ...tasks[index], ...req.body };
  res.status(200).json(tasks[index]);
});

router.delete("/tasks/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    const err = new Error("Task not found");
    err.status = 404;
    return next(err);
  }
  const [removed] = tasks.splice(index, 1);
  res.status(200).json({ message: "Deleted", task: removed });
});

router.get("/users", (req, res) => {
  res.json(cachedUsers);
});

export default router;