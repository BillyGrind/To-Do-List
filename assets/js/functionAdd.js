import { displayTask } from "./displayTask.js";

export function functionAdd(array) {
  let buttonAdd = document.getElementsByClassName("button_add")[0];
  let inputText = document.getElementsByClassName("input_text")[0];
  let form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    // localStorage.setItem("taskItem", JSON.stringify(array));
    event.preventDefault();
    if (event.key === "Enter") {
      let inputValue = inputText.value;
      array.push(inputValue);
      displayTask(inputValue);
      inputText.value = "";
    } else {
      let inputValue = inputText.value;
      array.push(inputValue);
      displayTask(inputValue);
      inputText.value = "";
    }
  });
}
