
const form=document.querySelector("form");
const input=document.getElementById("todo-input");
const todolist=document.getElementById("todo-list");

let alltodos=[];
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  addTodo();
});

const addTodo=()=>{
  const todoText=input.value.trim();
  if(todoText.length>0){
    alltodos.push(todoText);
    updateTodo();
    input.value="";
  }
};
const updateTodo = () => {
  // Clear the current list
  todolist.innerHTML = "";

  // Recreate the list from `alltodos`
  alltodos.forEach((todo, todoIndex) => {
    const todoItem = createTodo(todo, todoIndex);
    todolist.append(todoItem);
  });
};
const createTodo=(todo,todoIndex)=>{
  const todoId="todo"+todoIndex;
  const todoLI=document.createElement("li");
  todoLI.className="todo";
  todoLI.innerHTML=`
  <input type="checkbox" id="${todoId}">
  <label class="custom-checkbox" for="${todoId}">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
    </svg>
  </label>
  <label for="${todoId}" class="todo-text">
    ${todo}
  </label>
  <button class="delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    </svg>
  </button>
  `;
  const deleteButton = todoLI.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
    deleteTodo(todoIndex); // Handle deletion
  });

  return todoLI;
};
const deleteTodo = (todoIndex) => {
  alltodos.splice(todoIndex, 1);
  updateTodo();
};
