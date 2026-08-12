import express from "express";

import { tasks, fetchSampleUsers } from "../src/utils.js";

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

router.get("/users", (req, res) => {
  res.json(cachedUsers);
});

export default router;