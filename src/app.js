import { formatDate } from "./utils.js";
import { validateTask } from "./utils.js";
import { mergeTaskUpdate } from "./utils.js";

console.log(formatDate(new Date("2026-07-22")));

console.log(validateTask({ title: "Itelect2 Graded Task 3", dueDate: "2026=07-22"}));

console.log(validateTask());
