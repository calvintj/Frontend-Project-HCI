const form = document.getElementById("register-form");
const name = document.getElementById("name");
const country = document.getElementById("country");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const agree = document.getElementById("agree");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  error.innerHTML = "";
  if (name.value == "") {
    alert("Please fill in your name.");
    error.innerHTML += "<li>*Name is incorrect</li>";
  } else if (name.value.length < 5) {
    error.innerHTML += "<li>*Name is incorrect</li>";
    alert("Name length must more than 5 letters.");
  }

  if (username.value == "") {
    alert("Please fill in your username.");
    error.innerHTML += "<li>*Username is incorrect</li>";
  } else if (username.value.length < 5) {
    error.innerHTML += "<li>*Username is incorrect</li>";
    alert("Username length must more than 5 letters.");
  }

  if (country.value == "") {
    alert("Please select your country.");
    error.innerHTML += "<li>*Country is not selected yet</li>";
  } 

  if (password.value == "") {
    alert("Please fill in your password.");
    error.innerHTML += "<li>*Password is incorrect</li>";
  } else if (password.length < 8 || password.length > 15) {
    alert("Password length must be at least 8 and less than 15 characters.");
    error.innerHTML += "<li>*Password is incorrect</li>";
  }

  if (password.value != confirm.value) {
    error.innerHTML += "<li>*Password confirm is incorrect</li>";
  }

  if (agree.checked == false) {
    error.innerHTML += "<li>*You must agree to our term and conditions.</li>";
    alert("You must agree to our term and conditions.");
  }
});