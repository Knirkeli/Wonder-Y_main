import { submitComment } from './comment.mjs';

/**
 * Fetches a post and updates the HTML with the post data.
 * @async
 * @function fetchPost
 * @returns {Promise<void>}
 */
export const fetchPost = async () => {
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

  // Update the HTML with the post data
  const postTitle = document.querySelector(".card-title");
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
    fetchPost();
  });
}

// Call the function after the page has loaded
window.addEventListener("load", fetchPost);

/**
 * Handles the form submission event.
 */
const form = document.querySelector("#post-form");
if (form !== null) {
  form.addEventListener("submit", async event => {
    event.preventDefault();
  
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
  
    const comment = document.querySelector("#new-comment").value;
  
    await submitComment(postId, comment);
    // Re-fetch the post and update the comments section
    fetchPost();
  });
}