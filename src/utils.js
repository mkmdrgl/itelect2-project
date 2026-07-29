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