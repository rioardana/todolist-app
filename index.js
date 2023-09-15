// 1. reference html element in js
const formTask = document.querySelector(".form-task");

// 2. add eventlistener in the element form
formTask.addEventListener("submit", (event) => {
  event.preventDefault();
  // 3. reference html element input
  const inputForm = document.querySelector(".input-form");

  // 4. reference html ul/
  const wrapperList = document.querySelector(".task-list-wrapper");

  // 5. create document li using js
  const taskList = document.createElement("li");

  // 6. enter input value to li
  taskList.innerHTML = inputForm.value;

  // 7. append li to ul
  wrapperList.append(taskList);

   // 8. remove character on input
   inputForm.value = "";
});

