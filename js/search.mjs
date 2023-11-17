import { displayPosts } from './displayfeed.mjs';

/**
 * Searches for posts that include the given search term in their title, and displays the filtered posts.
 * @async
 * @function searchPosts
 * @param {string} searchTerm - The term to search for in the post titles.
 */
export const searchPosts = async (searchTerm) => {
    const token = localStorage.getItem("accessToken");

    const fetchOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(
        `https://api.noroff.dev/api/v1/social/posts`,
        fetchOptions
    );

    const responseData = await response.json();

    // Filter the posts based on the search term
    const filteredPosts = responseData.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Display the filtered posts
    displayPosts(filteredPosts);
};

// Event listener for the search form
/**
 * Adds an event listener to the search form that triggers a post search when the form is submitted.
 */
const searchForm = document.querySelector("form.d-flex.flex-column.flex-md-row");
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = document.querySelector("#searchPost").value;
    searchPosts(searchTerm);
});