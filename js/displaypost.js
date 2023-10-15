
// displaypost.js
import { getPosts } from "./getposts.js";
import { sortPosts } from "./sortpost.js";
import {filterPosts} from "./filter.js";

/**
 * @async
 * @description Display posts on the page based on the selected filter and sort options.
 */
export async function displayPosts() {
    try {
        // Get the selected options from your HTML
        const sortOption = document.querySelector("#sortOption");
        const filterOption = document.querySelector("#filterOption");
        // Log the selected options
        console.log("Sort Option: ", sortOption.value);
        console.log("Filter Option: ", filterOption.value);

        // Fetch the posts created by the current user with the author information included
        const posts = await getPosts(filterOption.value, true);

        // Add an event listener to the sortOption element
        sortOption.addEventListener("change", () => {
            // Get the selected option value
            const selectedOption = sortOption.value;

            // Sort the posts based on the selected option
            const sortedPosts = sortPosts(posts, selectedOption);

            // Clear the container
            const container = document.querySelector(".feed_container .row");
            container.innerHTML = "";

            // Iterate over each post
            for (const post of sortedPosts) {
                // Create a new post card
                const postCard = document.createElement("div");
                postCard.className = "col-12 mt-5 col-lg-6 post_card";

                // Add the HTML for the post card
                let innerHTML = `
                    <div class="card">
                        <div class="card-title text-center border-bottom">
                            <h3>${post.title}</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-2 d-none d-xl-block">
                                    <img src="${post.media}" alt="${post.title}'s profile picture" class="w-25 mx-auto d-flex justify-content-center">
                                </div>
                                <div class="col-8 text-center ">
                                    <p class="card-text">${post.body}</p>
                                </div>
                                <div class="col-2 text-center ">
                                    <button type="button" class="btn btn-success my-btn" data-post-id="${post.id}">Ponder this</button>
                                </div>
                            </div>
                        </div>
                    </div>`;

                // Set the inner HTML of the post card
                postCard.innerHTML = innerHTML;

                // Append the post card to the container
                container.appendChild(postCard);
            }
        });

        // Add an event listener to the filterOption element
        filterOption.addEventListener("change", async () => {
            // Get the selected option value
            const selectedOption = filterOption.value;

            // Get the posts based on the selected filter option
            const posts = await getPosts(selectedOption, true);

            // Sort the posts based on the selected option
            const sortedPosts = sortPosts(posts, sortOption.value);

            // Clear the container
            const container = document.querySelector(".feed_container .row");
            container.innerHTML = "";

            // Iterate over each post
            for (const post of sortedPosts) {
                // Create a new post card
                const postCard = document.createElement("div");
                postCard.className = "col-12 mt-5 col-lg-6 post_card";

                // Add the HTML for the post card
                let innerHTML = `
                    <div class="card">
                        <div class="card-title text-center border-bottom">
                            <h3>${post.title}</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-2 d-none d-xl-block">
                                    <img src="${post.media}" alt="${post.title}'s profile picture" class="w-25 mx-auto d-flex justify-content-center">
                                </div>
                                <div class="col-8 text-center ">
                                    <p class="card-text">${post.body}</p>
                                </div>
                                <div class="col-2 text-center ">
                                    <button type="button" class="btn btn-success my-btn" data-post-id="${post.id}">Ponder this</button>
                                </div>
                            </div>
                        </div>
                    </div>`;

                // Set the inner HTML of the post card
                postCard.innerHTML = innerHTML;

                // Append the post card to the container
                container.appendChild(postCard);
            }
        });

        // Sort the posts based on the default option
        const sortedPosts = sortPosts(posts, sortOption.value);

        // Clear the container
        const container = document.querySelector(".feed_container .row");
        container.innerHTML = "";

        // Iterate over each post
        for (const post of sortedPosts) {
            // Create a new post card
            const postCard = document.createElement("div");
            postCard.className = "col-12 mt-5 col-lg-6 post_card";

            // Add the HTML for the post card
            let innerHTML = `
            <div class="card">
                <div class="card-title text-center border-bottom">
                    <h3>${post.title}</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-2 d-none d-xl-block">
                            <img src="${post.media || '/img/trophy.jpg'}" alt="${post.title}'s profile picture" class="w-25 mx-auto d-flex justify-content-center">
                        </div>
                        <div class="col-8 text-center ">
                            <p class="card-text">${post.body}</p>
                        </div>
                        <div class="col-2 text-center ">
                            <button type="button" class="btn btn-success my-btn" data-post-id="${post.id}">Ponder this</button>
                        </div>
                    </div>
                </div>
            </div>`;

            // Set the inner HTML of the post card
            postCard.innerHTML = innerHTML;

            // Append the post card to the container
            container.appendChild(postCard);
        }


    } catch (error) {
        console.error("An error occurred:", error);
    }
}        // // Add a click event listener to the "Ponder this" button
        // const ponderButtons = document.querySelectorAll(".my-btn");
        // ponderButtons.forEach((button) => {
        //     button.addEventListener("click", async () => {
        //         // Get the post id from the data attribute
        //         const postId = button.dataset.postId;

        //         try {
        //             // Make a new API request to get the post data
        //             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        //             const post = await response.json();

        //             // Update the HTML with the post content
        //             const cardTitle = document.querySelector(".card-title");
        //             const cardImage = document.querySelector(".card-img-top");
        //             const cardText = document.querySelector(".card-text");

        //             cardTitle.innerHTML = post.title;
        //             cardImage.src = `https://picsum.photos/200/300?random=${post.id}`;
        //             cardImage.alt = `${post.title}'s profile picture`;
        //             cardText.innerHTML = post.body;
        //         } catch (error) {
        //             console.error(`An error occurred while fetching post with id ${postId}:`, error);
        //         }
        //     });
        // });