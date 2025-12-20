// //Steps --- (Algorithms)
// /*
// 1. Create array to store todos
// 2. when we click "add"
// 3. get text from textbox
// 4. Add it to array
// 5. console.log()the array
// */
// //steps
// /*
// 1. loop through the array
// 2. Create some html code for each todo
// 3. put html on web page
// */

// //MAin idea of js
// /*
// 1. save the data
// 2. generate the html
// 3. make it interactive
// */

// //how do we group the name and due date together
// const todoList = [
//   {
//     name: "make dinner",
//     dueDate: "2022-12-22",
//   },
//   { name: "wash dishes", dueDate: "2020-12-22" },
// ];

// renderTodoList();

// function renderTodoList() {
//   let todoListHTML = "";

//   for (let i = 0; i < todoList.length; i++) {
//     const todoObject = todoList[i];
//     // const name = todoObject.name;
//     // const dueDate = todoObject.dueDate;
//     const { name, dueDate } = todoObject;

//     // here changing for css make grid layout nothing but
//     const html = `
//        <div> ${name}</div>
//        <div> ${dueDate}</div>
//        <button onclick = "
//         todoList.splice(${i}, 1);
//         renderTodoList(); 
//       " class="js-delete-btn"> Delete</button>
//       `;
//     todoListHTML += html;
//   }

//   document.querySelector(".js-todo-list").innerHTML = todoListHTML;
// }

// function addTodo() {
//   const inputElement = document.querySelector(".js-name-input");
//   const name = inputElement.value;

//   const dateInputElement = document.querySelector(".js-due-date-input");
//   const dueDate = dateInputElement.value;

//   // add to array
//   todoList.push({
//     // name : name,
//     // dueDate: dueDate
//     name,
//     dueDate,
//   });

//   //empty after text add

//   inputElement.value = "";

//   renderTodoList();
// }

const todoList = JSON.parse(localStorage.getItem("todos")) || [];

renderTodoList();

function renderTodoList() {
  let html = "";

  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate } = todoList[i];

    html += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete-btn" onclick="deleteTodo(${i})">Delete</button>
    `;
  }

  document.querySelector(".js-todo-list").innerHTML = html;
}

function addTodo() {
  const nameInput = document.querySelector(".js-name-input");
  const dateInput = document.querySelector(".js-due-date-input");

  const name = nameInput.value.trim();
  const dueDate = dateInput.value;

  if (name === "" || dueDate === "") return;

  todoList.push({ name, dueDate });
  saveTodos();

  nameInput.value = "";
  dateInput.value = "";

  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  saveTodos();
  renderTodoList();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todoList));
}
