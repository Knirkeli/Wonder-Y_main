// **
//  * Updates a post and refreshes the page with the updated data.
//  * @async
//  * @function updatePost
//  */
// const updatePost = async () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const postId = urlParams.get("id");

//   // If there's no Post ID in the URL, do nothing
//   if (postId === null) {
//     return;
//   }

//   const token = localStorage.getItem("accessToken");

//   // Get the updated post data from the form
//   const title = document.querySelector("#edit-title").value;
//   const body = document.querySelector("#edit-body").value;
//   const tags = document.querySelector("#edit-tags").value.split(",");
//   const media = document.querySelector("#edit-media").value;

//   const jsonData = {
//     title,
//     body,
//     tags,
//     media,
//   };

//   const fetchOptions = {
//     method: "PUT",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jsonData),
//   };

//   try {
//     const response = await fetch(
//       `https://api.noroff.dev/api/v1/social/posts/${postId}`,
//       fetchOptions
//     );

//     if (!response.ok) {
//       throw new Error("Failed to update post");
//     }

//     console.log("Post updated successfully");
//     // Re-fetch the post and update the page
//     fetchPost();
//   } catch (error) {
//     console.error(error);
//   }
// };

// /**
//  * Updates a post when the button is clicked.
//  */
// const button = document.querySelector("#edit-post-button");
// if (button !== null) {
//   button.addEventListener("click", updatePost);
// }

/**
 * Updates a post and refreshes the page with the updated data.
 * @async
 * @function updatePost
 */
const updatePost = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
  
    // If there's no Post ID in the URL, do nothing
    if (postId === null) {
      return;
    }
  
    const token = localStorage.getItem("accessToken");
  
    // Get the updated post data from the form
    const title = document.querySelector("#edit-title").value;
    const body = document.querySelector("#edit-body").value;
  
    const jsonData = {
      title,
      body,
    };
  
    const fetchOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    };
  
    try {
      const response = await fetch(
        `https://api.noroff.dev/api/v1/social/posts/${postId}`,
        fetchOptions
      );
  
      if (!response.ok) {
        throw new Error("Failed to update post");
      }
  
      console.log("Post updated successfully");
      // Re-fetch the post and update the page
      fetchPost();
    } catch (error) {
      console.error(error);
    }
  };
  
  // Function to show the edit form and populate it with current post data
  const showEditForm = () => {
    const title = document.querySelector(".card-title").textContent;
    const body = document.querySelector(".card-text").textContent;
  
    document.querySelector("#edit-title").value = title;
    document.querySelector("#edit-body").value = body;
  
    document.querySelector("#edit-post-form").style.display = "block";
  };
  
  // Event listener for the "Edit Post" button
  const editButton = document.querySelector("#edit-post-button");
  if (editButton !== null) {
    editButton.addEventListener("click", showEditForm);
  }
  
  // Event listener for the "Submit" button in the edit form
  const submitButton = document.querySelector("#submit-edit-button");
  if (submitButton !== null) {
    submitButton.addEventListener("click", updatePost);
  }