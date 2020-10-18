let credientialDetails = {
    user1:{
        username:"Raj",
        password:123,
        todolists:{
            tasks:[
                    {task: "Clean room",date: "15 October"},
                    {task: "Get storage unit",date: "10 October"}
                ]
            
        }
    },
    user2:{
        username:"Govind",
        password:123,
        todolists:{
            tasks:[
                    {task: "Clean room",date: "15 October"},
                    {task: "Get storage unit",date: "10 October"}
                ]
            
        }
    },
    user3:{
        username:"Rajesh",
        password:123,
        todolists:{
            tasks:[
                    {task: "Clean room",date: "15 October"},
                    {task: "Get storage unit",date: "10 October"}
                ]
            
        }
    }
}



const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
let user = document.getElementById("display-name");
let usernameField = document.getElementById("username-field");
let passwordField = document.getElementById("password-field");
if(localStorage.getItem("crediential")){

    let storage = localStorage.getItem("crediential")
    let storageDetails = JSON.parse(storage)
    const {username,password} = storageDetails
    usernameField.value = username
    passwordField.value = password

}

let crediential = new Object();

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let count = 0;
    for(let value of Object.values(credientialDetails)){
        if (usernameField.value === value.username && (passwordField.value) === (value.password).toString()) {
            crediential.username = value.username;
            crediential.password = value.password
            localStorage.setItem('crediential', JSON.stringify(crediential))
            // localStorage.setItem('username', username);
            // localStorage.setItem('password', password);
            // Object.values(crediential).map((value)=>console.log(value))
            // window.location = "./otherpage.html"; 
            let storage = localStorage.getItem("crediential")
            let credientialfromStorage = JSON.parse(storage)
            user.innerText = "Hello " + (credientialfromStorage.username);
            count++;
            let todoLists = document.getElementById("todo-lists");
            rendertodolists(todoLists)
            render(value)
            // console.log(`username ${usernameField.value} ${value.username}`)
            // var pass = value.password
            // var str = (value.password).toString()
            // console.log(passwordField.value,str)
            break;
        } 
        }
        if(count == 1 ){
            alert("sucessful")
        }else{
            // alert("Wrong Password")
            usernameField.classList.add("warning")
            passwordField.classList.add("warning")
            let worningElement =  document.createElement("span");
            worningElement.classList.add("text-warning")
            worningElement.innerText = "You had entered wrong password or username"
            loginForm.append(worningElement)
            // console.log(worningElement)

        }
        
        
 
})



function render(value){
    let ul = document.getElementById("list");
    ul.innerHTML = "";
    for(var i = 0; i < value.todolists.tasks.length ; i++){
        let newLi = document.createElement("li");
        newLi.setAttribute("id","list")
        var content = value.todolists.tasks[i].task + "  " + value.todolists.tasks[i].date
        newLi.textContent += content ;
        ul.append(newLi);
    }
}

function rendertodolists(todoLists){

        var inputField = document.createElement("input");
        inputField.setAttribute("type", "text");
        // inputField.setAttribute("placeholder", "task");
        inputField.setAttribute("id", "task-field");
        todoLists.append(inputField)

        var taskSubmmit = document.createElement("input");
        taskSubmmit.setAttribute("type", "submit");
        taskSubmmit.setAttribute("value", "submit");
        taskSubmmit.setAttribute("id", "task-submition");
        todoLists.append(taskSubmmit)

        var br = document.createElement("br");
        todoLists.append(br)
        console.log(br)
        
        var logoutBtn = document.createElement("input");
        logoutBtn.setAttribute("type", "submit");
        logoutBtn.setAttribute("value", "Logout");
        logoutBtn.classList.add("formLogout")
        todoLists.append(logoutBtn)


        const formLogout = todoLists.getElementsByClassName("formLogout");
        // console.log(formLogout[0])
        formLogout[0].addEventListener("click",(e) => {
            console.log("logout")
            // localStorage.clear();
            todoLists.innerHTML = ''
        })

        let taskSubmition = document.getElementById("task-submition")
        let taskField = document.getElementById("task-field")

        taskSubmition.addEventListener('click',(e) => {
            if(taskField.value.length == 0 || taskField.value.length > 10 ){
                alert("enter proper values")
            }else{
                var date = new Date();
                var displatDate = date.getDate() +" " + date.toLocaleString('default', { month:'long'})
                // console.log(displatDate )
                // console.log(taskField.value)
                let newTask = {task:taskField.value,date:displatDate}
                console.log(newTask)
                for(let value of Object.values(credientialDetails)){
                    if (usernameField.value === value.username && (passwordField.value) === (value.password).toString()) {
                        value.todolists.tasks.push(newTask)
                        render(value)
                    }
                }
                taskField.value = ""
            }
            

        })
}