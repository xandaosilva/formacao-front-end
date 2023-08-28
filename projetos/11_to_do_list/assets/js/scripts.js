const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

const createBtn = (element, className, icon) => {
    const btn = document.createElement(element);
    btn.classList.add(className);
    btn.innerHTML = icon;
    return btn;
}

const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    const doneBtn = createBtn("button", "finish-todo", '<i class="fa-solid fa-check"><i/>');
    const editBtn = createBtn("button", "edit-todo", '<i class="fa-solid fa-pen"><i/>');
    const deleteBtn = createBtn("button", "remove-todo", '<i class="fa-solid fa-xmark"><i/>');
    
    todoTitle.innerText = text;
    
    todo.appendChild(todoTitle);
    todo.appendChild(doneBtn);
    todo.appendChild(editBtn);
    todo.appendChild(deleteBtn);
    todoList.appendChild(todo);
    
    todoInput.value = "";
    todoInput.focus();
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
});
