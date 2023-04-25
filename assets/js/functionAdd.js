export function functionAdd(array) {
  let buttonAdd = document.getElementsByClassName("button_add");
  let inputText = document.getElementsByClassName("input_text");

  buttonAdd.addEventListener("click", () => {
    inputValue = inputText.value;
    array.push(inputValue);
  });
};
