import { displayPosts } from './displayfeed.mjs';

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

    console.log('All posts:', responseData);

    // Filter the posts based on the search term
    const filteredPosts = responseData.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

    console.log('Filtered posts:', filteredPosts);

    // Display the filtered posts
    displayPosts(filteredPosts);
};

// Event listener for the search form
const searchForm = document.querySelector("form.d-flex.flex-column.flex-md-row");
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = document.querySelector("#searchPost").value;
    console.log('Search term:', searchTerm);
    searchPosts(searchTerm);
});