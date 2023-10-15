const API_BASE_URL = 'https://api.noroff.dev/api/v1';

// Get form elements
var form = document.getElementById("signup-form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var avatar = document.getElementById("userImage");

// Get error message elements
var usernameError = document.getElementById("usernameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

// Get the 'goToLogin' button
var goToLoginButton = document.getElementById('goToLogin');

// Add event listener for form submission
form.addEventListener("submit", async function (event) {
    event.preventDefault();
  
    // Get user data
    var user = {
      name: username.value,
      email: email.value,
      password: password.value,
      avatar: avatar.value,
    };
  
    console.log('User data:', user); // Log the user data
  
    try {
      // Set up fetch options
      /**
       * Object containing the data to be sent in a POST request to the server.
       * @typedef {Object} PostData
       * @property {string} method - The HTTP method to be used in the request.
       * @property {Object} headers - The headers to be included in the request.
       * @property {string} headers.Content-Type - The content type of the request body.
       * @property {Object} body - The data to be sent in the request body, in JSON format.
       */

      /**
       * Constructs the POST request data object.
       * @param {Object} user - The user data to be sent in the request body.
       * @returns {PostData} - The POST request data object.
       */
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
  
      console.log('Fetch options:', postData); // Log the fetch options
  
      // Send request to server
      const response = await fetch(`${API_BASE_URL}/social/auth/register`, postData);
      const data = await response.json();
  
      console.log('Server response:', data); // Log the server response
  
      // Check response status
      if (response.ok) {
        // Trigger a click event on the 'goToLogin' button
        goToLoginButton.click();
      } else {
        // Show error message
        if (data && data.message) {
          console.error(data.message);
          usernameError.innerText = data.message;
          emailError.innerText = data.message;
          passwordError.innerText = data.message;
        } else {
          console.error("An error occurred.");
          usernameError.innerText = "An error occurred.";
          emailError.innerText = "An error occurred.";
          passwordError.innerText = "An error occurred.";
        }
      }
    } catch (error) {
      console.error("Error:", error);
      usernameError.innerText = "An error occurred.";
      emailError.innerText = "An error occurred.";
      passwordError.innerText = "An error occurred.";
    }
  });