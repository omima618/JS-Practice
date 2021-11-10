let inp = document.querySelector(".task-name");
let addBtn = document.querySelector(".add");
let container = document.querySelector(".container");
let delAll = document.querySelector(".del-all");
let tasksArr = [];
if (window.localStorage.getItem("tasks")) {
    tasksArr = JSON.parse(window.localStorage.getItem("tasks"));
}
addElementsToPage(tasksArr);
addBtn.onclick = function () {
    if (inp.value !== "") {
        addTasksToArr(inp.value);
        inp.value = "";
    }
};
delAll.addEventListener("click", function () {
    container.innerHTML = "";
    tasksArr = [];
    window.localStorage.removeItem("tasks");
});
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        removeFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("task")) {
        e.target.classList.toggle("done");
        doneStatus(e.target.getAttribute("data-id"));
    }
    if (e.target.classList.contains("del-all")) {
        container.innerHTML = "";
        window.localStorage.clear();
    }
});
function doneStatus(taskId) {
    for (let i = 0; i < tasksArr.length; i++) {
        if (tasksArr[i].id == taskId) {
            tasksArr[i].done === false
                ? (tasksArr[i].done = true)
                : (tasksArr[i].done = false);
        }
    }
    addDataToLocalStorage(tasksArr);
}

function addTasksToArr(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        done: false,
    };
    tasksArr.push(task);
    addElementsToPage(tasksArr);
    addDataToLocalStorage(tasksArr);
}
function addElementsToPage(tasksArr) {
    container.innerHTML = "";
    tasksArr.forEach((task) => {
        let taskDiv = document.createElement("div");
        taskDiv.className = "task";
        if (task.done === true) {
            taskDiv.className = "task done";
        }
        taskDiv.setAttribute("data-id", task.id);
        taskDiv.appendChild(document.createTextNode(task.title));
        let delBtn = document.createElement("button");
        delBtn.className = "del";
        delBtn.appendChild(document.createTextNode("delete"));
        taskDiv.appendChild(delBtn);
        container.appendChild(taskDiv);
    });
}
function addDataToLocalStorage(tasksArr) {
    window.localStorage.setItem("tasks", JSON.stringify(tasksArr));
}
function removeFromLocalStorage(taskId) {
    tasksArr = tasksArr.filter((task) => {
        return task.id != taskId;
    });
    addDataToLocalStorage(tasksArr);
}
