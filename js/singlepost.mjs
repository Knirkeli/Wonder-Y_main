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
    `https://api.noroff.dev/api/v1/social/posts/${postId}?_comments=true`,
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
    if (responseData.media !== null) {
      postImage.src = responseData.media;
    } else {
      postImage.remove();
    }
  }

  const postBody = document.querySelector(".card-text");
  if (postBody !== null) {
    postBody.textContent = responseData.body;
  }

  const commentsSection = document.querySelector("#comments-section ul");
  if (commentsSection !== null) {
    // Remove all existing comments
    while (commentsSection.firstChild) {
      commentsSection.firstChild.remove();
    }

    if (responseData.comments && responseData.comments.length > 0) {
      // Add each comment as a new list item
      responseData.comments.forEach(comment => {
        const listItem = document.createElement("li");
        listItem.textContent = comment.body;
        listItem.classList.add("list-group-item");
        commentsSection.appendChild(listItem);
      });
    } else {
      // If there are no comments, add a list item with the text "Be the first to comment"
      const listItem = document.createElement("li");
      listItem.textContent = "Be the first to comment";
      listItem.classList.add("list-group-item");
      commentsSection.appendChild(listItem);
    }
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

const form = document.querySelector("#post-form");
if (form !== null) {
  form.addEventListener("submit", async event => {
    event.preventDefault();
  
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    console.log("Post ID:", postId);
  
    const token = localStorage.getItem("accessToken");
  
    const comment = document.querySelector("#new-comment").value;
    const jsonData = {
      body: comment,
    };
  
    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    };
  
    try {
      const response = await fetch(
        `https://api.noroff.dev/api/v1/social/posts/${postId}/comment`,
        fetchOptions
      );
  
      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }
  
      console.log("Comment submitted successfully");
      // Re-fetch the post and update the comments section
      fetchPost();
    } catch (error) {
      console.error(error);
    }
  });
}
