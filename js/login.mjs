document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('goToLogin').addEventListener('click', function() {
      var myModal = bootstrap.Modal.getInstance(document.getElementById('mymodal'));
      myModal.hide();
      var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
  });
});

var form = document.getElementById("login-form");
var usermail = document.getElementById("loginMail");
var password = document.getElementById("loginPassword");

usermail.addEventListener('input', function() {
document.getElementById("loginMailError").innerText = "";
});

password.addEventListener('input', function() {
document.getElementById("loginPasswordError").innerText = "";
});

form.addEventListener("submit", function (event) {
  console.log('Form submit event triggered');

  if (!usermail.checkValidity()) {
    console.log('Username is not valid');
    document.getElementById("loginMailError").innerText = "Must be a valid @noroff.no or @stud.noroff.no mail";
  }

  if (!password.checkValidity()) {
    console.log('Password is not valid');
    document.getElementById("loginPasswordError").innerText = "Password must be at least 8 characters long.";
  }

  if (!form.checkValidity()) {
    console.log('Form is not valid');
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  event.preventDefault();

  console.log('Sending fetch request');

  fetch('https://api.noroff.dev/api/v1/social/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(response => {
    console.log('Received response from server');
    return response.json();
  })
  .then(data => {
    console.log('Parsed response data', data);

    if (data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('username', data.name);
      console.log('User is logged in');

      // Redirect the user to the profile page
      window.location.href = "profile.html";
    } else {
      document.getElementById("loginPasswordError").innerText = 'Sorry, no user with that combination of credentials found. Please try again or create a user here.';
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  form.classList.add("was-validated");
});

/**
 * Opens the signup modal.
 * @function
 * @name openSignupModal
 * @returns {void}
 */
function openSignupModal() {
var myModal = bootstrap.Modal.getInstance(document.getElementById('mymodal'));
myModal.show();
}