import { createTask } from "./createTask.js";
import { functionAdd } from "./functionAdd.js";
import { functionDelete } from "./functionDelete.js";

functionAdd();

window.addEventListener("change", () => {
  functionDelete();
});
