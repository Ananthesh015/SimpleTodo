// .container
//     .formfields
//       #login-form
//         #username-field 
//         #password-field 
//         #login-form-submit

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

interface IOtherInfo {
    username: string;
    password: number|string;
}
let  crediential: IOtherInfo ={
    username: " ",
    password: null
};
const loginForm:HTMLElement = document.getElementById("login-form");
const loginButton:HTMLElement = document.getElementById("login-form-submit");
let usernameField:HTMLInputElement  = document.getElementById("username-field") as HTMLInputElement;
let passwordField:HTMLInputElement  = document.getElementById("password-field") as HTMLInputElement;

// ------- Autocomplete  ------- //
if(localStorage.getItem("crediential")){

    let storage = localStorage.getItem("crediential");
    let storageDetails = JSON.parse(storage);
    const {username,password} = storageDetails;
    usernameField.value= username ;
    passwordField.value = password;

}
//------- End of Autocomplete  ------- //


// -------Fun for  LoginBtn   ------- //
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let count = 0;
    //Retriving the Data & validation
    for(let keys of Object.keys(credientialDetails)){
        let value = credientialDetails[keys]
        console.log(usernameField.value === value.username)
        if (usernameField.value === value.username && (passwordField.value) === (value.password).toString()) {
            crediential.username = value.username;
            crediential.password = value.password;
            localStorage.setItem('crediential', JSON.stringify(crediential))
            console.log("Welcome",crediential.username)
            count++;
            break;
        }
    }
    if(count == 1 ){
        // alert("sucessful")
        window.location.href = './home.html';
        // (window.location) = "./home.html"; 
    }else{
        // alert("Wrong Password")
        usernameField.classList.add("warning")
        passwordField.classList.add("warning")
        let worningElement:HTMLElement =  document.createElement("span");
        worningElement.classList.add("text-warning")
        worningElement.innerText = "You had entered wrong password or username"
        loginForm.append(worningElement)
    }
})

// let value = Object.keys(credientialDetails) 
// console.log(value)




