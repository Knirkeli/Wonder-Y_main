// export const submitComment = async (postId, comment) => {
//     const token = localStorage.getItem("accessToken");
  
//     const jsonData = {
//       body: comment,
//     };
  
//     const fetchOptions = {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(jsonData),
//     };
  
//     try {
//       const response = await fetch(
//         `https://api.noroff.dev/api/v1/social/posts/${postId}/comment`,
//         fetchOptions
//       );
  
//       if (!response.ok) {
//         throw new Error("Failed to submit comment");
//       }
  
//       console.log("Comment submitted successfully");
//     } catch (error) {
//       console.error(error);
//     }
//   };

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
  
      console.log("Comment submitted successfully");
  
      // Clear the comment form
      const commentInput = document.querySelector("#new-comment");
      if (commentInput !== null) {
        commentInput.value = '';
      }
    } catch (error) {
      console.error(error);
    }
  };