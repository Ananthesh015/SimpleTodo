// .container
//     .formfields
//       #login-form
//         #username-field 
//         #password-field 
//         #login-form-submit

let crediential = new Object();
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
let usernameField = document.getElementById("username-field");
let passwordField = document.getElementById("password-field");

// ------- Autocomplete  ------- //
if(localStorage.getItem("crediential")){

    let storage = localStorage.getItem("crediential")
    let storageDetails = JSON.parse(storage)
    const {username,password} = storageDetails
    usernameField.value = username
    passwordField.value = password

}
// ------- End of Autocomplete  ------- //


// -------Fun for  LoginBtn   ------- //
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let count = 0;
    //Retriving the Data & validation
    for(let value of Object.values(credientialDetails)){
        if (usernameField.value === value.username && (passwordField.value) === (value.password).toString()) {
            crediential.username = value.username;
            crediential.password = value.password
            localStorage.setItem('crediential', JSON.stringify(crediential))
            count++;
            break;
        }
    }
    if(count == 1 ){
        // alert("sucessful")
        window.location = "./home.html"; 
    }else{
        // alert("Wrong Password")
        usernameField.classList.add("warning")
        passwordField.classList.add("warning")
        let worningElement =  document.createElement("span");
        worningElement.classList.add("text-warning")
        worningElement.innerText = "You had entered wrong password or username"
        loginForm.append(worningElement)
    }
})