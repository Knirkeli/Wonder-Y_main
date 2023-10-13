var form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (!username.checkValidity()) {
    document.getElementById("usernameError").innerText = "Username must not contain punctuation symbols apart from underscore (_).";
  }

  if (!email.checkValidity()) {
    document.getElementById("emailError").innerText = "Please enter a valid noroff.no or stud.noroff.no email.";
  }

  if (!password.checkValidity()) {
    document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
  }

  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    localStorage.setItem("formValidated", "true");
  }

  form.classList.add("was-validated");
});

var mymodal = document.getElementById("mymodal");

var modal = new bootstrap.Modal(mymodal);

if (localStorage.getItem("formValidated") !== "true") {
  modal.show();
}
