document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let itemInput = document.querySelector("input[name='item-input']");
    let itemValue = itemInput.value;

    //test to be sure that user entered a value
    if (itemValue.length !== 0) {
      //create new item
      let newItemEl = document.createElement("li");
      let newCheckbox = document.createElement("input");
      newCheckbox.setAttribute("Type", "checkbox");
      newItemEl.appendChild(newCheckbox);

      let newLabel = document.createElement("label");
      newLabel.textContent = itemValue;
      newLabel.appendChild(newLabel);

      //get a reference to list and append list item
      let list = document.querySelector('.todo-list');
      list.appendChild(newItemEl);
      //clear the user input
      itemInput.value = '';

      //add a click event listener that serves a toggle
            newCheckBox.addEventListener("click", function (event) {
                if (this.nextSibling.style.textDecoration == "line-through") {
          this.nextSibling.style.textDecoration = "";
        } else {
          this.nextSibling.style.textDecoration = "line-through";
        }
      });

    }
  }) // form submit
}) // document ready