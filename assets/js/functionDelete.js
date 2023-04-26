export function functionDelete() {
  let checkBoxes = document.querySelectorAll("#to_do_list_task_checkbox");
  let buttonDelete = document.querySelectorAll(".button_delete");

  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", () => {
      if (checkBox.checked) {
        buttonDelete.style.display = "visible";
      } else {
        buttonDelete.style.display = "none";
      }
      console.log("click");
    });
  });
}
