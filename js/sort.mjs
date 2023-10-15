import { displayPosts } from './displayfeed.mjs';

// Function to sort posts
export const sortPosts = (posts, option) => {
    if (option === 'date') {
        // Sort by date (new to old)
        return posts.sort((a, b) => new Date(b.created) - new Date(a.created));
    } else if (option === 'title') {
        // Sort by title (alphabetically)
        return posts.sort((a, b) => a.title.localeCompare(b.title));
    }

    // If no valid option is provided, return the posts as is
    return posts;
};

// Event listener for the sort option
document.querySelector('#sortOption').addEventListener('change', async (event) => {
    // Get the selected sort option
    const sortOption = event.target.value;

    // Fetch all posts
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

    // Sort the posts
    const sortedPosts = sortPosts(responseData, sortOption);

    // Display the sorted posts
    displayPosts(sortedPosts);
});