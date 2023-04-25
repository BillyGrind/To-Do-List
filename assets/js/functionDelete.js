export function functionDelete() {
  let checkBoxes = document.querySelectorAll("#to_do_list_task_checkbox");

  checkBoxes.forEach((checkBox) => {
    if (checkBox.checked) {
      console.log("checked");
    } else {
      console.log("unchecked");
    }
  });
}
