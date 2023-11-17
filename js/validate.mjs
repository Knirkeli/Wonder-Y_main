var form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {
  /**
   * Retrieves the HTML element with the ID "username" and assigns it to the variable "username".
   * @type {HTMLElement}
   */
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
  }

  form.classList.add("was-validated");
});

// Add input event listeners to clear error messages
username.addEventListener('input', function() {
  document.getElementById("usernameError").innerText = "";
});

email.addEventListener('input', function() {
  document.getElementById("emailError").innerText = "";
});

password.addEventListener('input', function() {
  document.getElementById("passwordError").innerText = "";
});

var mymodal = document.getElementById("mymodal");

var modal = new bootstrap.Modal(mymodal);

if (localStorage.getItem("formValidated") !== "true") {
  modal.show();
}