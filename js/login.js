// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('goToLogin').addEventListener('click', function() {
//         var myModal = bootstrap.Modal.getInstance(document.getElementById('mymodal'));
//         myModal.hide();
//         var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
//         loginModal.show();
//     });
// });

// var form = document.getElementById("login-form");
// var username = document.getElementById("loginUsername");
// var password = document.getElementById("loginPassword");

// // Add input event listeners to clear error messages
// username.addEventListener('input', function() {
//   document.getElementById("loginUsernameError").innerText = "";
// });

// password.addEventListener('input', function() {
//   document.getElementById("loginPasswordError").innerText = "";
// });

// form.addEventListener("submit", function (event) {
//   if (!username.checkValidity()) {
//     document.getElementById("loginUsernameError").innerText = "Username must not contain punctuation symbols apart from underscore (_).";
//   }

//   if (!password.checkValidity()) {
//     document.getElementById("loginPasswordError").innerText = "Password must be at least 8 characters long.";
//   }

//   if (!form.checkValidity()) {
//     event.preventDefault();
//     event.stopPropagation();
//   }

//   form.classList.add("was-validated");
// });

// document.getElementById('goToLogin').addEventListener('click', function() {
//     console.log('Button clicked');
//     var myModal = bootstrap.Modal.getInstance(document.getElementById('mymodal'));
//     myModal.hide();
//     var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
//     loginModal.show();
// });

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     event.stopPropagation();
  
//     // Log the form data
//     console.log('Form submitted with the following data:');
//     console.log('Username: ' + username.value);
//     console.log('Password: ' + password.value);
  
//     var storedUsername = localStorage.getItem('username');
//     var storedPassword = localStorage.getItem('password');
  
//     if (username.value === storedUsername && password.value === storedPassword) {
//       // User is logged in
//       console.log('User is logged in');
//       // You can redirect the user to another page or change the UI to reflect that the user is logged in
//     } else {
//       // No match found in LocalStorage
//       document.getElementById("loginPasswordError").innerText = 'Sorry, no user with that combination of credentials found. Please try again or create a user here).';
//     }
  
//     form.classList.add("was-validated");
//   });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('goToLogin').addEventListener('click', function() {
        var myModal = bootstrap.Modal.getInstance(document.getElementById('mymodal'));
        myModal.hide();
        var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    });
});

var form = document.getElementById("login-form");
var username = document.getElementById("loginUsername");
var password = document.getElementById("loginPassword");

// Add input event listeners to clear error messages
username.addEventListener('input', function() {
  document.getElementById("loginUsernameError").innerText = "";
});

password.addEventListener('input', function() {
  document.getElementById("loginPasswordError").innerText = "";
});

form.addEventListener("submit", function (event) {
    console.log('Form submit event triggered');
  
    if (!username.checkValidity()) {
      console.log('Username is not valid');
      document.getElementById("loginUsernameError").innerText = "Username must not contain punctuation symbols apart from underscore (_).";
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
  
    // Prevent the form from being submitted
    event.preventDefault();
  
    console.log('Sending fetch request');
  
    // Send a POST request to the API
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
        // Store the JWT token and username locally
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('username', data.name);
        console.log('User is logged in');
        // You can redirect the user to another page or change the UI to reflect that the user is logged in
      } else {
        // Show an error message
        document.getElementById("loginPasswordError").innerText = 'Sorry, no user with that combination of credentials found. Please try again or create a user here.';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
    form.classList.add("was-validated");
  });
  
  function openSignupModal() {
    var myModal = bootstrap.Modal.getInstance(document.getElementById('mymodal'));
    myModal.show();
  }