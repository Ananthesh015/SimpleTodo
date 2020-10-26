// .container
//     .formfields
//       #login-form
//         #username-field 
//         #password-field 
//         #login-form-submit
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
var crediential = {
    username: " ",
    password: null
};
var loginForm = document.getElementById("login-form");
var loginButton = document.getElementById("login-form-submit");
var usernameField = document.getElementById("username-field");
var passwordField = document.getElementById("password-field");
// ------- Autocomplete  ------- //
if (localStorage.getItem("crediential")) {
    var storage = localStorage.getItem("crediential");
    var storageDetails = JSON.parse(storage);
    var username = storageDetails.username, password = storageDetails.password;
    usernameField.value = username;
    passwordField.value = password;
}
//------- End of Autocomplete  ------- //
// -------Fun for  LoginBtn   ------- //
loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    var count = 0;
    //Retriving the Data & validation
    for (var _i = 0, _a = Object.keys(credientialDetails); _i < _a.length; _i++) {
        var keys = _a[_i];
        var value = credientialDetails[keys];
        console.log(usernameField.value === value.username);
        if (usernameField.value === value.username && (passwordField.value) === (value.password).toString()) {
            crediential.username = value.username;
            crediential.password = value.password;
            localStorage.setItem('crediential', JSON.stringify(crediential));
            console.log("Welcome", crediential.username);
            count++;
            break;
        }
    }
    if (count == 1) {
        // alert("sucessful")
        window.location.href = './home.html';
        // (window.location) = "./home.html"; 
    }
    else {
        // alert("Wrong Password")
        usernameField.classList.add("warning");
        passwordField.classList.add("warning");
        var worningElement = document.createElement("span");
        worningElement.classList.add("text-warning");
        worningElement.innerText = "You had entered wrong password or username";
        loginForm.append(worningElement);
    }
});
// let value = Object.keys(credientialDetails) 
// console.log(value)
