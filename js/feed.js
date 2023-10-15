// import { sortPosts } from "./sortposts.js";
// import { filterPosts } from "./filter.js";

// const sortOption = document.getElementById("sortOption");
// const filterOption = document.getElementById("filterOption");

// // Define the posts array
// let posts = [];

// // Fetch the posts and store them in the posts array
// async function fetchPosts() {
//   const response = await fetch("/social/posts?limit=50");
//   const data = await response.json();
//   posts = data;
// }

// // Call the fetchPosts function to initialize the posts array
// fetchPosts();

// sortOption.addEventListener("change", async () => {
//   const sortedPosts = sortPosts(posts, sortOption.value);
//   const filteredPosts = await filterPosts(filterOption.value);
//   displayPosts(sortedPosts.filter(post => filteredPosts.includes(post)));
// });

// filterOption.addEventListener("change", async () => {
//   const sortedPosts = sortPosts(posts, sortOption.value);
//   const filteredPosts = await filterPosts(filterOption.value);
//   displayPosts(sortedPosts.filter(post => filteredPosts.includes(post)));
// });