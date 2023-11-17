/**
 * Submits a comment to a post.
 * @async
 * @function
 * @param {string} postId - The ID of the post to comment on.
 * @param {string} comment - The text of the comment to submit.
 * @returns {Promise<void>}
 */
export const submitComment = async (postId, comment) => {
  const token = localStorage.getItem("accessToken");

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

    // Clear the comment form
    const commentInput = document.querySelector("#new-comment");
    if (commentInput !== null) {
      commentInput.value = '';
    }
  } catch (error) {
    console.error(error);
  }
};