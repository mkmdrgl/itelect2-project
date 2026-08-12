export class TaskValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "TaskValidationError"; //
  }
}

export function validateTask(taskData) {
  if (!taskData || typeof taskData !== "object") return false;
  if (!taskData.title || typeof taskData.title !== "string") return false;
  return true;
}

export function createTask(taskData) {
  if (!validateTask(taskData)) {
    throw new TaskValidationError("Invalid task data"); //
  }

  return {
    id: Date.now(),
    completed: false,
    ...taskData, //
  };
}

export const tasks = [
  { id: 1, title: "Sample Task 1", completed: false },
  { id: 2, title: "Sample Task 2", completed: true }
];

export async function fetchSampleUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email
  }));
}