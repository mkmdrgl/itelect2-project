import { formatDate } from "./utils.js";
import { validateTask } from "./utils.js";
import { mergeTaskUpdate } from "./utils.js";

console.log(formatDate(new Date("2026-07-22")));

console.log(validateTask({ title: "Itelect2 Graded Task 3", dueDate: "2026=07-22"}));

console.log(validateTask());

const originalTask = { title: "Itelect2 GT 3", description: "Session 3: Advanced JavaScript (ES6+)"};
const updatedTask = mergeTaskUpdate(originalTask, { title: "Itelect2: Graded Task 3"});

console.log(updatedTask);