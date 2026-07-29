import { fetchSampleUsers } from "./api.js";
import { createTask } from "./utils.js";

async function main() {
  try {
    const users = await fetchSampleUsers();
    console.log("Fetched Users:", users);

    const sampleTask = { title: "Complete GT4 assignment" };
    const newTask = createTask(sampleTask);
    console.log("Created Task:", newTask);
  } catch (err) {
    console.error("Error occurred:", err.message);
  }
}

main();