/**
 * Button for deleting a post.
 * @type {HTMLElement}
 */
const deleteButton = document.getElementById("delete-post-button");

/**
 * Checks if the current user is the author of the post. If not, hides the delete button.
 * @async
 * @function
 * @returns {Promise<void>}
 */
async function checkPostAuthor() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  if (postId === null) {
    console.error("Post ID not found in URL");
    return;
  }

  const token = localStorage.getItem("accessToken");

  const fetchOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // Fetch the post details with the author included
  const postResponse = await fetch(`https://api.noroff.dev/api/v1/social/posts/${postId}?_author=true`, fetchOptions);

  if (!postResponse.ok) {
    console.error("Failed to fetch post details");
    return;
  }

  const postData = await postResponse.json();

  // Check if the current user is the author of the post
  const currentUser = localStorage.getItem("username");
  if (postData.author && postData.author.name !== currentUser) {
    // If the current user is not the author, hide the delete button
    deleteButton.style.display = "none";
  }
}

// Call the function when the page loads
checkPostAuthor();

if (deleteButton !== null) {
  /**
   * Event listener for the delete button click event. Deletes the post and redirects to the feed page.
   * @async
   * @function
   * @returns {Promise<void>}
   */
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
      window.location.href = "feed.html";
    } else {
      console.error("Failed to delete post");
    }
  });
}