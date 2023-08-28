const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let oldInputValue;

const createBtn = (element, className, icon) => {
    const btn = document.createElement(element);
    btn.classList.add(className);
    btn.innerHTML = icon;
    return btn;
}

const saveTodo = (text) => {
    const todo = document.createElement("div");
    const todoTitle = document.createElement("h3");
    const doneBtn = createBtn("button", "finish-todo", '<i class="fa-solid fa-check"><i/>');
    const editBtn = createBtn("button", "edit-todo", '<i class="fa-solid fa-pen"><i/>');
    const deleteBtn = createBtn("button", "remove-todo", '<i class="fa-solid fa-xmark"><i/>');
    
    todo.classList.add("todo");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    todo.appendChild(doneBtn);
    todo.appendChild(editBtn);
    todo.appendChild(deleteBtn);
    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
}

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }
    });
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText || "";
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }
    
    if(targetEl.classList.contains("edit-todo")) {
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue){
        updateTodo(editInputValue);
    }

    toggleForms();
});
