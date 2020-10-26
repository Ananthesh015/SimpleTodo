;
var credientialDetails = {
    user1: {
        username: "Raj",
        password: 123,
        todolists: {
            tasks: [
                { task: "Clean room", date: "15 October" },
                { task: "Get Milk", date: "15 October" }
            ]
        }
    },
    user2: {
        username: "Govind",
        password: 123,
        todolists: {
            tasks: [
                { task: "Clean room", date: "15 October" },
                { task: "Get Milk", date: "15 October" }
            ]
        }
    },
    user3: {
        username: "Rajesh",
        password: 123,
        todolists: {
            tasks: [
                { task: "Clean room", date: "15 October" },
                { task: "Get Milk", date: "15 October" }
            ]
        }
    }
};
var user = document.getElementById("display-name");
var storage = localStorage.getItem("crediential");
var credientialfromStorage = JSON.parse(storage);
user.innerText = "Hello " + (credientialfromStorage.username);
var todoLists = document.getElementById("todo-lists");
render();
addElements(todoLists);
// ------- Render the todolist  ------- //
function render() {
    var _loop_1 = function (keys) {
        var value = credientialDetails[keys];
        if (credientialfromStorage.username === value.username) {
            var ul_1 = document.getElementById("lists");
            ul_1.innerHTML = "";
            value.todolists.tasks.map(function (ele, i) {
                var newLi = document.createElement("li");
                newLi.setAttribute("id", "list");
                newLi.setAttribute('onclick', "removeElement(" + i + ")");
                var content = value.todolists.tasks[i].task + "  " + value.todolists.tasks[i].date;
                newLi.textContent += content;
                ul_1.append(newLi);
            });
        }
    };
    for (var _i = 0, _a = Object.keys(credientialDetails); _i < _a.length; _i++) {
        var keys = _a[_i];
        _loop_1(keys);
    }
}
// ------- End Render of the todolist  ------- //
// ------- Adding DOM Elements  ------- //
function addElements(todoLists) {
    // Taskfield
    var inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", "task-field");
    todoLists.append(inputField);
    // TaskSubmitBtn
    var taskSubmmit = document.createElement("input");
    taskSubmmit.setAttribute("type", "submit");
    taskSubmmit.setAttribute("value", "submit");
    taskSubmmit.setAttribute("id", "task-submition");
    todoLists.append(taskSubmmit);
    // LineBreaker
    var br = document.createElement("br");
    todoLists.append(br);
    // LogoutBtn
    var logoutBtn = document.createElement("input");
    logoutBtn.setAttribute("type", "submit");
    logoutBtn.setAttribute("value", "Logout");
    logoutBtn.classList.add("form-logout");
    todoLists.append(logoutBtn);
    // Fun for LogoutBtn
    var formLogout = todoLists.getElementsByClassName("form-logout");
    formLogout[0].addEventListener("click", function (e) {
        e.preventDefault();
        // console.log("logout")
        // user.innerText =  "Signout";
        window.location.href = './index.html';
        // window.location = "./index.html";
    });
    // Fun for TaskSubmition
    var taskSubmition = document.getElementById("task-submition");
    var taskField = document.getElementById("task-field");
    taskSubmition.addEventListener('click', function (e) {
        e.preventDefault();
        if (taskField.value.length == 0 || taskField.value.length >= 10) {
            // alert("enter proper values")
            inputField.classList.add("warning");
            var worningElement = document.createElement("span");
            worningElement.classList.add("text-warning");
            worningElement.innerText = "Text should be of length minimun 1 character and  maximum  10 character  ";
            todoLists.append(worningElement);
            // console.log(worningElement)
        }
        else {
            var date = new Date();
            var displatDate = date.getDate() + " " + date.toLocaleString('default', { month: 'long' });
            var newTask = { task: taskField.value, date: displatDate };
            // console.log(newTask)
            for (var _i = 0, _a = Object.keys(credientialDetails); _i < _a.length; _i++) {
                var keys = _a[_i];
                var value = credientialDetails[keys];
                if (credientialfromStorage.username === value.username) {
                    var value_1 = credientialDetails[keys];
                    value_1.todolists.tasks.push(newTask);
                    // console.log(value.todolists.tasks.length)
                }
            }
            // console.log(Object.values(credientialDetails).todolists.tasks.length)
            render();
            taskField.value = "";
        }
    });
}
// ------- End of Adding DOM Elements  ------- //
// ------- Removing list from DOM Elements  ------- //
var size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
            size++;
    }
    return size;
};
function removeElement(i) {
    for (var _i = 0, _a = Object.keys(credientialDetails); _i < _a.length; _i++) {
        var keys = _a[_i];
        var value = credientialDetails[keys];
        if (credientialfromStorage.username === value.username) {
            // console.log("username",value.username)
            var tasksLists = value.todolists;
            tasksLists.tasks.splice(i, 1);
        }
    }
    render();
}
;
// ------- End Removing list from DOM Elements  ------- //
