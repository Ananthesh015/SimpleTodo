// .container
//     #todo-lists .lists
//       #display-name
//       #lists
//          #list 
//       #task-field 
//       #task-submition
//       .form-logout

let user = document.getElementById("display-name"); 
let storage = localStorage.getItem("crediential")
let credientialfromStorage = JSON.parse(storage)
user.innerText = "Hello " + (credientialfromStorage.username);
let todoLists = document.getElementById("todo-lists");
render()
addElements(todoLists)

// ------- Render the todolist  ------- //
function render(){
    for(let value of Object.values(credientialDetails)){
        if (credientialfromStorage.username === value.username) {
            let ul = document.getElementById("lists");
            ul.innerHTML = "";
            for(var i = 0; i < value.todolists.tasks.length ; i++){
                let newLi = document.createElement("li");
                newLi.setAttribute("id","list")
                var content = value.todolists.tasks[i].task + "  " + value.todolists.tasks[i].date
                newLi.textContent += content ;
                ul.append(newLi);
            }
        }
    }
}
// ------- End Render of the todolist  ------- //

// ------- Adding DOM Elements  ------- //
function addElements(todoLists){

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
    const formLogout = todoLists.getElementsByClassName("form-logout");
    formLogout[0].addEventListener("click",(e) => {
        e.preventDefault();
        // console.log("logout")
        // user.innerText =  "Signout";
        window.location = "./index.html";

    })


    // Fun for TaskSubmition
    let taskSubmition = document.getElementById("task-submition")
    let taskField = document.getElementById("task-field")

    taskSubmition.addEventListener('click',(e) => {
        e.preventDefault();
        if(taskField.value.length == 0 || taskField.value.length >= 10 ){
            // alert("enter proper values")
            inputField.classList.add("warning")
            let worningElement =  document.createElement("span");
            worningElement.classList.add("text-warning")
            worningElement.innerText = "Text should be of length minimun 1 character and  maximum  10 character  "
            todoLists.append(worningElement)
            // console.log(worningElement)
        }else{
            var date = new Date();
            var displatDate = date.getDate() +" " + date.toLocaleString('default', { month:'long'})
            let newTask = {task:taskField.value,date:displatDate}
            // console.log(newTask)
            for(let value of Object.values(credientialDetails)){
                value.todolists.tasks.push(newTask)
                console.log(value.username,value.todolists.tasks.length)
            }
            // console.log(Object.values(credientialDetails).todolists.tasks.length)
            render()
            taskField.value = ""
        }
    })
}
// ------- End of Adding DOM Elements  ------- //

// ------- Removing list from DOM Elements  ------- //
let lists = document.getElementsByTagName("li")
    // console.log(lists.length)
    for(let i=0;i<lists.length;i++){
        console.log(lists[i])
        lists[i].addEventListener('click',(e)=>{
            e.preventDefault();
            var target = e.target;
            // console.log(target)
            e.target.remove()
            console.log(target.textContent.slice(0,10))
        })
    }
// ------- End Removing list from DOM Elements  ------- //