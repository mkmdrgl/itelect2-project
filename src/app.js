import { fetchSampleUsers } from "./api.js";
import { createTask, TaskValidationError } from "./utils.js";

async function main() {
  try {
    const newTask = createTask({ title: "Complete GT4 assignment" });
    console.log("Task Created Successfully:", newTask);
  } catch (err) {
    if (err instanceof TaskValidationError) {
      console.error("Task Validation Failed:", err.message);
    } else {
      console.error("Unexpected Error:", err.message);
    }
  }

  try {
    const users = await fetchSampleUsers(); //
    console.log("Fetched Users:", users);
  } catch (err) {
    console.error("Error fetching users:", err.message); //
  }
}

main();