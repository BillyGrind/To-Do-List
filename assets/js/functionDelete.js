export function functionDelete() {
  let checkBox = document.getElementById("to_do_list_task_checkbox");
  let buttonDelete = document.getElementsByClassName("button_delete");

  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      buttonDelete.style.display = "visible";
    } else {
      buttonDelete.style.display = "none";
    }
    console.log("click");
  });
}
