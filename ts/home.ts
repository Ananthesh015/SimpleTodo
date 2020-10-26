// .container
//     #todo-lists .lists
//       #display-name
//       #lists
//          #list 
//       #task-field 
//       #task-submition
//       .form-logout
interface ITask{
    task: string;
    date: string;
}

interface ITasks {
    tasks: Array<ITask>;
}

interface IUserInfo {
    username: string;
    password: string | number;
    todolists: ITasks;
}

interface ICredientialDetails {
    user1: IUserInfo;
    user2: IUserInfo;
    user3: IUserInfo;
};

const credientialDetails: ICredientialDetails = {
    user1:{
        username:"Raj",
        password:123,
        todolists:{
            tasks:[
                    {task: "Clean room",date: "15 October"},
                    {task: "Get Milk",date: "15 October"}
                ]
        }
    },
    user2:{
        username:"Govind",
        password:123,
        todolists:{
            tasks:[
                    {task: "Clean room",date: "15 October"},
                    {task: "Get Milk",date: "15 October"}
                ]
            
        }
    },
    user3:{
        username:"Rajesh",
        password:123,
        todolists:{
            tasks:[
                    {task: "Clean room",date: "15 October"},
                    {task: "Get Milk",date: "15 October"}
                ]
            
        }
    }
}

let user:HTMLElement = document.getElementById("display-name"); 
let storage:string = localStorage.getItem("crediential");
let credientialfromStorage = JSON.parse(storage);
user.innerText = "Hello " + (credientialfromStorage.username);
let todoLists:HTMLElement = document.getElementById("todo-lists");
render();
addElements(todoLists);

// ------- Render the todolist  ------- //
function render():void{
    for(let keys of Object.keys(credientialDetails)){
        let value = credientialDetails[keys];
        if (credientialfromStorage.username === value.username) {
            let ul:HTMLElement = document.getElementById("lists");
            ul.innerHTML = "";
            value.todolists.tasks.map((ele,i)=>{
                    let newLi:HTMLElement = document.createElement("li");
                    newLi.setAttribute("id","list");
                    newLi.setAttribute('onclick',`removeElement(${i})`)
                    var content:string = value.todolists.tasks[i].task + "  " + value.todolists.tasks[i].date
                    newLi.textContent += content ;
                    ul.append(newLi);
            })
        }
    }
}
// ------- End Render of the todolist  ------- //

// ------- Adding DOM Elements  ------- //
function addElements(todoLists:HTMLElement):void{

    // Taskfield
    var inputField:HTMLInputElement = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", "task-field");
    todoLists.append(inputField);

    // TaskSubmitBtn
    var taskSubmmit:HTMLInputElement = document.createElement("input");
    taskSubmmit.setAttribute("type", "submit");
    taskSubmmit.setAttribute("value", "submit");
    taskSubmmit.setAttribute("id", "task-submition");
    todoLists.append(taskSubmmit);

    // LineBreaker
    var br:HTMLElement = document.createElement("br");
    todoLists.append(br);

    // LogoutBtn
    var logoutBtn:HTMLElement = document.createElement("input");
    logoutBtn.setAttribute("type", "submit");
    logoutBtn.setAttribute("value", "Logout");
    logoutBtn.classList.add("form-logout");
    todoLists.append(logoutBtn);

    // Fun for LogoutBtn
    const formLogout:HTMLCollection = todoLists.getElementsByClassName("form-logout");
    formLogout[0].addEventListener("click",(e) => {
        e.preventDefault();
        // console.log("logout")
        // user.innerText =  "Signout";
        window.location.href = './index.html';
        // window.location = "./index.html";

    })


    // Fun for TaskSubmition
    let taskSubmition:HTMLInputElement = document.getElementById("task-submition") as HTMLInputElement
    let taskField:HTMLInputElement = document.getElementById("task-field") as HTMLInputElement

    taskSubmition.addEventListener('click',(e) => {
        e.preventDefault();
        if(taskField.value.length == 0 || taskField.value.length >= 10 ){
            // alert("enter proper values")
            inputField.classList.add("warning")
            let worningElement:HTMLElement =  document.createElement("span");
            worningElement.classList.add("text-warning")
            worningElement.innerText = "Text should be of length minimun 1 character and  maximum  10 character  "
            todoLists.append(worningElement)
            // console.log(worningElement)
        }else{
            var date:Date = new Date();
            var displatDate:string = date.getDate() +" " + date.toLocaleString('default', { month:'long'})
            let newTask = {task:taskField.value,date:displatDate}
            // console.log(newTask)
            for(let keys of Object.keys(credientialDetails)){
                let value = credientialDetails[keys]
                if (credientialfromStorage.username === value.username){
                    let value:IUserInfo = credientialDetails[keys]
                    value.todolists.tasks.push(newTask)
                    // console.log(value.todolists.tasks.length)
                }
            }
            // console.log(Object.values(credientialDetails).todolists.tasks.length)
            render()
            taskField.value = ""
        }
    })
}
// ------- End of Adding DOM Elements  ------- //

// ------- Removing list from DOM Elements  ------- //
const  size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
function removeElement(i){
    for(let keys of Object.keys(credientialDetails)){
        let value = credientialDetails[keys]
        if (credientialfromStorage.username === value.username){
            // console.log("username",value.username)
            let tasksLists = value.todolists; 
            tasksLists.tasks.splice(i, 1)
        }
    }
    render()
    
};
// ------- End Removing list from DOM Elements  ------- //