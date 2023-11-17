// var form = document.getElementById("signup-form");

// form.addEventListener("submit", function (event) {
//   /**
//    * Retrieves the HTML element with the ID "username" and assigns it to the variable "username".
//    * @type {HTMLElement}
//    */
//   var username = document.getElementById("username");
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");

//   if (!username.checkValidity()) {
//     document.getElementById("usernameError").innerText = "Username must not contain punctuation symbols apart from underscore (_).";
//   }

//   if (!email.checkValidity()) {
//     document.getElementById("emailError").innerText = "Please enter a valid noroff.no or stud.noroff.no email.";
//   }

//   if (!password.checkValidity()) {
//     document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
//   }

//   if (!form.checkValidity()) {
//     event.preventDefault();
//     event.stopPropagation();
//   }

//   form.classList.add("was-validated");
// });

// // Add input event listeners to clear error messages
// username.addEventListener('input', function() {
//   document.getElementById("usernameError").innerText = "";
// });

// email.addEventListener('input', function() {
//   document.getElementById("emailError").innerText = "";
// });

// password.addEventListener('input', function() {
//   document.getElementById("passwordError").innerText = "";
// });

// var mymodal = document.getElementById("mymodal");

// var modal = new bootstrap.Modal(mymodal);

// if (localStorage.getItem("formValidated") !== "true") {
//   modal.show();
// }

/**
 * Retrieves the HTML form element with the ID "signup-form" and assigns it to the variable "form".
 * @type {HTMLFormElement}
 */
var form = document.getElementById("signup-form");

/**
 * Event listener for the form submission event.
 */
form.addEventListener("submit", function (event) {
  /**
   * Retrieves the HTML input elements with the IDs "username", "email", and "password" and assigns them to the respective variables.
   * @type {HTMLInputElement}
   */
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  // Check the validity of the input fields and display error messages if they are invalid
  if (!username.checkValidity()) {
    document.getElementById("usernameError").innerText = "Username must not contain punctuation symbols apart from underscore (_).";
  }

  if (!email.checkValidity()) {
    document.getElementById("emailError").innerText = "Please enter a valid noroff.no or stud.noroff.no email.";
  }

  if (!password.checkValidity()) {
    document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
  }

  // Prevent form submission if the form is invalid
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Add the "was-validated" class to the form
  form.classList.add("was-validated");
});

/**
 * Event listeners for the input event on the username, email, and password fields.
 * These clear the error messages when the user starts typing in the field.
 */
username.addEventListener('input', function() {
  document.getElementById("usernameError").innerText = "";
});

email.addEventListener('input', function() {
  document.getElementById("emailError").innerText = "";
});

password.addEventListener('input', function() {
  document.getElementById("passwordError").innerText = "";
});

/**
 * Retrieves the HTML element with the ID "mymodal" and assigns it to the variable "mymodal".
 * @type {HTMLElement}
 */
var mymodal = document.getElementById("mymodal");

/**
 * Creates a new Bootstrap modal with the "mymodal" element.
 * @type {bootstrap.Modal}
 */
var modal = new bootstrap.Modal(mymodal);

// Show the modal if the form has not been validated yet
if (localStorage.getItem("formValidated") !== "true") {
  modal.show();
}