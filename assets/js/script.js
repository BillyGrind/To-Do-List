import { createTask } from "./createTask.js";
import { functionAdd } from "./functionAdd.js";

let arrayExemple = ["first", "second", "troisieme"];
let arrayTask = [];

createTask(arrayExemple);
functionAdd (arrayTask);

console.log(arrayTask);