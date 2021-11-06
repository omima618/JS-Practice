let inp = document.querySelector(".task-name");
let addBtn = document.querySelector(".add");
let container = document.querySelector(".container");
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
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        removeFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
        e.target.parentElement.remove();
    }
});
function addTasksToArr(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
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
