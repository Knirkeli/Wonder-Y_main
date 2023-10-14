// function registerUser(form) {
//     var username = document.getElementById("username");
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     var userImage = document.getElementById("userImage");

//     // Create a new FormData object
//     var formData = new FormData();

//     // Append the form data
//     formData.append('name', username.value);
//     formData.append('email', email.value);
//     formData.append('password', password.value);
//     formData.append('avatar', userImage.files[0]);

//     // Send a POST request to the API
//     fetch('https://api.noroff.dev/api/v1/social/auth/register', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Store only username and JWT token in LocalStorage
//       localStorage.setItem('username', username.value);
//       localStorage.setItem('token', data.token);

//       console.log(data);

      // Show login modal after successful registration
//       var loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
//       loginModal.show();
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }