export async function getPosts(filterOption, includeAuthor, searchTerm = "") {
    try {
      const token = localStorage.getItem("accessToken");
  
      let url = "https://api.noroff.dev/api/v1/social/posts";
  
      switch (filterOption) {
        case "me":
          url += `?_author=${localStorage.getItem("userId")}`;
          break;
        case "following":
          url = "https://api.noroff.dev/api/v1/social/posts/following";
          break;
        case "all":
          url += "?_sort=title&_order=asc";
          break;
        default:
          break;
      }
  
      if (includeAuthor) {
        url += "?_author=true";
      }
  
      if (searchTerm) {
        url += `&q=${searchTerm}`;
      }
  
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      if (!Array.isArray(responseData)) {
        throw new Error("The API didn't return an array of posts");
      }
  
      return responseData;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

const posts = await getPosts("me", true);