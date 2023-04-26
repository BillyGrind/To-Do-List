export function displayTask(elem) {
  let list = document.querySelector(".to_do_list");
  //create new li
  let listItem = document.createElement("li");
  listItem.classList = "list_item";

  //construct content
  let content = `
      <input type="checkbox" name="task" id="to_do_list_task_checkbox" />
      <label for="task">${elem}</label>
      <button class="button_delete" style="display:none">Delete</button>
     `;
  listItem.innerHTML += content;
  list.appendChild(listItem);
  // check si la checkbox est checked
  const checkbox = listItem.querySelector('input[type="checkbox"]');
  const deleteButton = listItem.querySelector(".button_delete");

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
  // click and update task
  // let label = listItem.getElementsByTagName("label");
  // label.addEventListener("click", () => {
  //   const input = document.createElement("input");
  //   input.type = "text";
  //   input.value = label.textContent;
  //   listItem.replaceChild(input, label);
  //   input.addEventListener("keyup", (event) => {
  //     if (event.key === "Enter") {
  //       listItems[listItems.indexOf(label.textContent)] = input.value;
  //       label.textContent = input.value;
  //       listItem.replaceChild(label, input);
  //       localStorage.setItem("myListItems", JSON.stringify(listItems));
  //     }
  //   });
  //});
}
