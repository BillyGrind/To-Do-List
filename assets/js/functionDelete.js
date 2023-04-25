export function functionDelete() {
  let checkBoxes = document.querySelectorAll("#to_do_list_task_checkbox");
  let listCheckBox = document.querySelectorAll(".list_item");
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        console.log("checked");
      } else {
        console.log("unchecked");
      }
    });
  });
}

//   let buttonDelete = document.querySelector(".button_delete");

//   buttonDelete.addEventListener("click", () => {
//     let listCheckBox = document.querySelectorAll(".list_item");
//     let checkBoxes = document.querySelectorAll("#to_do_list_task_checkbox");
//     checkBoxes.forEach((checkBox) => {
//       if (checkBox.checked) {
//         checkBox.parentNode.remove();
//       }
//     });
//   });
