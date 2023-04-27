export function displayTask(elem) {
  let list = document.querySelector(".to_do_list");
  //create new li
  let listItem = document.createElement("li");
  listItem.classList = "list_item";
  // check si la checkbox est checked

  //construct content
  let content = `
      <input type="checkbox" name="task" id="to_do_list_task_checkbox" />
      <label for="task" class="taskUncompleted">${elem}</label>
      <button class="button_delete" style="display:none">Delete</button>
     `;
  listItem.innerHTML += content;
  list.appendChild(listItem);

  let checkbox = listItem.querySelector('input[type="checkbox"]');
  let label = listItem.querySelector("label");
  let deleteButton = listItem.querySelector(".button_delete");

  // add event listener
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      deleteButton.style.display = "block";
      deleteButton.addEventListener("click", () => {
        deleteButton.parentNode.remove();
      });
    } else {
      deleteButton.style.display = "none";
    }
  });
  // add event listener pour le label

  label.addEventListener("click", () => {
    let input = document.createElement("input");
    input.type = "text";
    input.value = label.textContent;
    label.textContent = "";
    listItem.replaceChild(input, label);
    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        let newLabelValue = input.value;
        label.textContent = newLabelValue;
        listItem.replaceChild(label, input);
      }
    });
  });
}
