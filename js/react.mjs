/**
 * Event listener for DOMContentLoaded event.
 */
document.addEventListener("DOMContentLoaded", async function() {
  const likeButton = document.querySelector("#reactions .btn-light:first-child");
  const dislikeButton = document.querySelector("#reactions .btn-light:last-child");

  /**
   * Fetches a post with reactions and updates the reaction count on the page.
   * @returns {Promise<void>}
   */
  async function fetchPostWithReactions() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    const token = localStorage.getItem("accessToken");

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `https://api.noroff.dev/api/v1/social/posts/${postId}?_reactions=true`;

    try {
      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        throw new Error("Failed to fetch post");
      }

      const post = await response.json();

      // Find the reaction objects for the like and dislike reactions
      const likeReaction = post.reactions.find(r => r.symbol === '👍');
      const dislikeReaction = post.reactions.find(r => r.symbol === '👎');

      // Update the button text with the new counts
      likeButton.textContent = `👍 Like (${likeReaction ? likeReaction.count : 0})`;
      dislikeButton.textContent = `👎 Dislike (${dislikeReaction ? dislikeReaction.count : 0})`;
    } catch (error) {
      console.error(error);
    }
  }

  // Fetch the post with reactions when the page loads
  fetchPostWithReactions();

  /**
   * Reacts to a post and updates the reaction count on the page.
   * @param {string} reaction - The reaction to post.
   * @returns {Promise<void>}
   */
  async function reactToPost(reaction) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    const token = localStorage.getItem("accessToken");
  
    const fetchOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    const url = `https://api.noroff.dev/api/v1/social/posts/${postId}/react/${reaction}`;
  
    try {
      const response = await fetch(url, fetchOptions);
  
      if (!response.ok) {
        throw new Error("Failed to react to post");
      }
  
      const responseData = await response.json();
  
      // Update the button text with the new count
      if (reaction === '👍') {
        likeButton.textContent = `👍 Like (${responseData.count})`;
      } else if (reaction === '👎') {
        dislikeButton.textContent = `👎 Dislike (${responseData.count})`;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Add event listeners for the buttons
  likeButton.addEventListener("click", () => reactToPost('👍'));
  dislikeButton.addEventListener("click", () => reactToPost('👎'));
});