export function functionAdd(array) {
  let buttonAdd = document.getElementsByClassName("button_add")[0];
  let inputText = document.getElementsByClassName("input_text")[0];

  buttonAdd.addEventListener("click", () => {
    let inputValue = inputText.value;

    let list = document.querySelector(".to_do_list");
    //create new li
    let listItem = document.createElement("li");
    listItem.classList.add("list_item");

    //construct content
    let content = `       
            <input type="checkbox" name="task" id="to_do_list_task_checkbox" />
                <label for="task">${inputValue}</label>
           `;

    listItem.innerHTML += content;

    list.appendChild(listItem);
  });
}
