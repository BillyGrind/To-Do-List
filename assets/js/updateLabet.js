export function updateLabel() {
  let labels = document.getElementsByTagName("label");

  labels.forEach(label, () => {
    label.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = label.textContent;
      listItem.replaceChild(input, label);
      input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          listItems[listItems.indexOf(label.textContent)] = input.value;
          label.textContent = input.value;
          listItem.replaceChild(label, input);
          localStorage.setItem("myListItems", JSON.stringify(listItems));
        }
      });
    });
  });
}
