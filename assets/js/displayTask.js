// export function displayTask(array) {
//   if (localStorage.getItem("myListItems")) {
//     array = JSON.parse(localStorage.getItem("myListItems"));
//     array.forEach((item) => {
//       let list = document.querySelector(".to_do_list");
//       //create new li
//       let listItem = document.createElement("li");
//       listItem.classList = "list_item";
//       console.log("hello");
//       //construct content
//       let content = `
//       <input type="checkbox" name="task" id="to_do_list_task_checkbox" />
//       <label for="task" class="taskUncompleted">${item}</label>
//       <button class="button_delete" style="display:none">Delete</button>
//      `;
//       listItem.innerHTML += content;
//       list.appendChild(listItem);

//       let checkbox = listItem.querySelector('input[type="checkbox"]');
//       let label = listItem.querySelector("label");
//       let deleteButton = listItem.querySelector(".button_delete");

//       // add event listener
//       checkbox.addEventListener("change", () => {
//         if (checkbox.checked) {
//           deleteButton.style.display = "block";
//           deleteButton.addEventListener("click", () => {
//             deleteButton.parentNode.remove();
//           });
//         } else {
//           deleteButton.style.display = "none";
//         }
//       });
//       // add event listener pour le label

//       label.addEventListener("click", () => {
//         let input = document.createElement("input");
//         input.type = "text";
//         input.value = label.textContent;
//         label.textContent = "";
//         listItem.replaceChild(input, label);
//         input.addEventListener("keyup", (event) => {
//           if (event.key === "Enter") {
//             let newLabelValue = input.value;
//             label.textContent = newLabelValue;
//             listItem.replaceChild(label, input);
//           }
//         });
//       });
//       localStorage.setItem("myListItems",JSON.stringify(array));
//     });
//   }
// }
export function displayTask(array) {
  let list = document.querySelector(".to_do_list");
  list.innerHTML = ""; // Supprimer le contenu de la liste à puces avant d'ajouter les nouveaux éléments

  if (localStorage.getItem("myListItems")) {
    array = JSON.parse(localStorage.getItem("myListItems"));
    array.forEach((item) => {
      //create new li
      let listItem = document.createElement("li");
      listItem.classList = "list_item";

      //construct content
      let content = `
        <input type="checkbox" name="task" id="to_do_list_task_checkbox" />
        <label for="task" class="taskUncompleted">${item}</label>
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
            let index = Array.from(list.children).indexOf(listItem);
            array.splice(index, 1);
            localStorage.setItem("myListItems", JSON.stringify(array));
            deleteButton.parentNode.remove();
            console.log(array);
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
    });
  }
  localStorage.setItem("myListItems", JSON.stringify(array));
}
