// comment this

// /**
//  * Fetches a post and updates the HTML with the post data.
//  * @async
//  * @function fetchPost
//  * @throws Will throw an error if the Post ID is not found in URL.
//  */
// const fetchPost = async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const postId = urlParams.get("id");
  
//     if (postId === null) {
//       console.error("Post ID not found in URL");
//       return;
//     }
  
//     const token = localStorage.getItem("accessToken");
  
//     const fetchOptions = {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
  
//     const response = await fetch(
//       `https://api.noroff.dev/api/v1/social/posts/${postId}`,
//       fetchOptions
//     );
  
//     const responseData = await response.json();
  
//     console.log(responseData);
  
//     // Update the HTML with the post data
//     const postTitle = document.querySelector(".card-title h5");
//     if (postTitle !== null) {
//       postTitle.textContent = responseData.title;
//     }
  
//     const postImage = document.querySelector(".card-img-top");
//     if (postImage !== null) {
//       postImage.src = responseData.image;
//     }
  
//     const postBody = document.querySelector(".card-text");
//     if (postBody !== null) {
//       postBody.textContent = responseData.body;
//     }
// };

// /**
//  * Fetches a post when the button is clicked.
//  */
// const button = document.querySelector("#fetch-post-button");
// if (button !== null) {
//   button.addEventListener("click", () => {
//     console.log("Button clicked");
//     fetchPost();
//   });
// }

// // Call the function after the page has loaded
// window.addEventListener("load", fetchPost);

// /**
//  * Deletes a post when the delete button is clicked.
//  * @async
//  */
// const deleteButton = document.getElementById("delete-post-button");

// if (deleteButton !== null) {
//   deleteButton.addEventListener("click", async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const postId = urlParams.get("id");

//     if (postId === null) {
//       console.error("Post ID not found in URL");
//       return;
//     }

//     const token = localStorage.getItem("accessToken");

//     const fetchOptions = {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const response = await fetch(
//       `https://api.noroff.dev/api/v1/social/posts/${postId}`,
//       fetchOptions
//     );

//     if (response.ok) {
//       console.log("Post deleted successfully");
//       window.location.href = "feed.html";
//     } else {
//       console.error("Failed to delete post");
//     }
//   });
// }

/**
 * Fetches a post and updates the HTML with the post data.
 * @async
 * @function fetchPost
 */
const fetchPost = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  // If there's no Post ID in the URL, do nothing
  if (postId === null) {
    return;
  }

  const token = localStorage.getItem("accessToken");

  const fetchOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `https://api.noroff.dev/api/v1/social/posts/${postId}`,
    fetchOptions
  );

  const responseData = await response.json();

  console.log(responseData);

  // Update the HTML with the post data
  const postTitle = document.querySelector(".card-title h5");
  if (postTitle !== null) {
    postTitle.textContent = responseData.title;
  }

  const postImage = document.querySelector(".card-img-top");
  if (postImage !== null) {
    postImage.src = responseData.image;
  }

  const postBody = document.querySelector(".card-text");
  if (postBody !== null) {
    postBody.textContent = responseData.body;
  }
};

/**
* Fetches a post when the button is clicked.
*/
const button = document.querySelector("#fetch-post-button");
if (button !== null) {
button.addEventListener("click", () => {
  console.log("Button clicked");
  fetchPost();
});
}

// Call the function after the page has loaded
window.addEventListener("load", fetchPost);

/**
* Deletes a post when the delete button is clicked.
* @async
*/
const deleteButton = document.getElementById("delete-post-button");

if (deleteButton !== null) {
deleteButton.addEventListener("click", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (postId === null) {
    console.error("Post ID not found in URL");
    return;
  }

  const token = localStorage.getItem("accessToken");

  const fetchOptions = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `https://api.noroff.dev/api/v1/social/posts/${postId}`,
    fetchOptions
  );

  if (response.ok) {
    console.log("Post deleted successfully");
    window.location.href = "feed.html";
  } else {
    console.error("Failed to delete post");
  }
});
}