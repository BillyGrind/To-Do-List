export function functionAdd(array) {
  let buttonAdd = document.getElementsByClassName("button_add")[0];
  let inputText = document.getElementsByClassName("input_text")[0];

  buttonAdd.addEventListener("click", () => {
    let inputValue = inputText.value;
    array.push(inputValue);
  });
}
