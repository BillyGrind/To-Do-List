export function displayTask(array) {
  array.forEach((element) => {
    let list = document.querySelector(".to_do_list");
    //create new li
    let listItem = document.createElement("li");
    listItem.classList.add("list_item");

    //construct content
    let content = `       
              <input type="checkbox" name="task" id="to_do_list_task_checkbox" />
                  <label for="task">${element}</label>
             `;

    listItem.innerHTML += content;

    list.appendChild(listItem);
  });
}
