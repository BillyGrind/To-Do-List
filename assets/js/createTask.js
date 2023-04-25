export function createTask(array) {
    let list = document.querySelector(".to_do_list");
    array.forEach((elem) => {
      //create new li
      let listItem = document.createElement("li");
      listItem.classList = "list_item";
  
      //construct content
      let content = `       
        <input type="checkbox" name="task" id="to_do_list_task_checkbox" />
        //     <label for="task">${elem}</label>
       `;
  
      listItem.innerHTML += content;
  
      list.appendChild(listItem);
    });
  };
  