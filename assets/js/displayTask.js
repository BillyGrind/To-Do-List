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
}
