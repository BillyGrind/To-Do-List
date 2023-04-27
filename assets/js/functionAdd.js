import { displayTask } from "./displayTask.js";

export function functionAdd(array) {
  let buttonAdd = document.getElementsByClassName("button_add")[0];
  let inputText = document.getElementsByClassName("input_text")[0];
  let form = document.querySelector("form");

  // form.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   if (event.key === "Enter") {
  //     let inputValue = inputText.value;
  //     array.push(inputValue);
  //     localStorage.setItem("myListItems", JSON.stringify(array));
  //     displayTask(array);
  //     inputText.value = "";
  //   } else {
  //     let inputValue = inputText.value;
  //     array.push(inputValue);
  //     localStorage.setItem("myListItems", JSON.stringify(array));
  //     displayTask(array);
  //     inputText.value = "";
  //   }
  // });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputValue = inputText.value;
    array.push(inputValue);
    localStorage.setItem("myListItems", JSON.stringify(array));
    displayTask(array);
    inputText.value = "";
  });
}
