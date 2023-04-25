export function functionAdd(array) {
  let buttonAdd = document.getElementsByClassName("button_add")[0];
  let inputText = document.getElementsByClassName("input_text")[0];

  buttonAdd.addEventListener("click", () => {
    let inputValue = inputText.value;
    array.push(inputValue);
  });
}


const setStorage = () => localStorage.setItem('TASKS', JSON.stringify(Array.from(tasks)));


//https://codaholic.sillo.org/2020/01/04/maitriser-javascript-une-liste-de-taches/