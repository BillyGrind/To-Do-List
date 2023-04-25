import { createTask } from "./createTask.js";
import { displayTask } from "./displayTask.js";
import { functionAdd } from "./functionAdd.js";
import { functionDelete } from "./functionDelete.js";

let taskArray = [];

functionAdd(taskArray);
displayTask(taskArray);
window.addEventListener("change", () => {
  functionDelete();
});
