const todoList = [];

const listContainer = document.getElementById("list-container");


loadList();

function addTask() {
    const inputBox = document.getElementById("todo-input");
    const task = inputBox.value;
    if (task) {
        todoList.push(task);
        inputBox.value = "";
        loadList();
    } else {
        alert("Please enter a task.");
    }
}

function loadList() {
    listContainer.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        listContainer.innerHTML += `<div class="list-item">${todoList[i]} <span onclick="removeTask(${i})">🗑️</span></div>`;
    }
}

function removeTask(index) {
    todoList.splice(index, 1);
    loadList();
}