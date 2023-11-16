// document.addEventListener("DOMContentLoaded", async function() {
//     const likeButton = document.querySelector("#reactions .btn-light:first-child");
//     const dislikeButton = document.querySelector("#reactions .btn-light:last-child");
  
//     async function reactToPost(reaction) {
//       const urlParams = new URLSearchParams(window.location.search);
//       const postId = urlParams.get("id");
//       const token = localStorage.getItem("accessToken");
  
//       const fetchOptions = {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
  
//       try {
//         const response = await fetch(
//           `https://api.noroff.dev/api/v1/social/posts/${postId}/react/${encodeURIComponent(reaction)}`,
//           fetchOptions
//         );
  
//         if (!response.ok) {
//           throw new Error("Failed to react to post");
//         }
  
//         const responseData = await response.json();
//         console.log(`Reaction: ${responseData.symbol}, Count: ${responseData.count}`);
  
//         // Update the button text with the new count
//         if (reaction === '👍') {
//           likeButton.textContent = `👍 Like (${responseData.count})`;
//         } else if (reaction === '👎') {
//           dislikeButton.textContent = `👎 Dislike (${responseData.count})`;
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
  
//     likeButton.addEventListener("click", () => reactToPost('👍'));
//     dislikeButton.addEventListener("click", () => reactToPost('👎'));

//   });

document.addEventListener("DOMContentLoaded", async function() {
    const likeButton = document.querySelector("#reactions .btn-light:first-child");
    const dislikeButton = document.querySelector("#reactions .btn-light:last-child");
  
    async function reactToPost(reaction, isInitialFetch = false) {
      const urlParams = new URLSearchParams(window.location.search);
      const postId = urlParams.get("id");
      const token = localStorage.getItem("accessToken");
  
      const fetchOptions = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      try {
        const response = await fetch(
          `https://api.noroff.dev/api/v1/social/posts/${postId}/react/${encodeURIComponent(reaction)}`,
          fetchOptions
        );
  
        if (!response.ok) {
          throw new Error("Failed to react to post");
        }
  
        const responseData = await response.json();
        console.log(`Reaction: ${responseData.symbol}, Count: ${responseData.count}`);
  
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
  
    // Fetch the initial counts of likes and dislikes when the page loads
    reactToPost('👍', true);
    reactToPost('👎', true);
  
    // Add event listeners for the buttons
    likeButton.addEventListener("click", () => reactToPost('👍'));
    dislikeButton.addEventListener("click", () => reactToPost('👎'));
  });
  