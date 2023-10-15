
// /**
//  * @function createPost
//  * @async
//  * @description Create a new post using the specified data.
//  *
//  * @returns {Promise<void>}
//  */
// async function createPost() {
//     try {
//         const title = document.querySelector("#postTitle").value;

//         const body = document.querySelector("#postContent").value;

//         const token = localStorage.getItem("accessToken");

//         const fetchOptions = {
//             method: "POST",
//             body: JSON.stringify({
//                 title: title,
//                 body: body,
//             }),
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//         };

//         const response = await fetch(
//             `https://api.noroff.dev/api/v1/social/posts`,
//             fetchOptions
//         );

//         const responseData = await response.json();

//         console.log(responseData);

//         // Store the current scroll position in localStorage
//         localStorage.setItem("scrollPosition", window.scrollY);

//         // Reload the page after editing the post
//         window.location.reload();
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }

// // Event listener for creating a post
// const createPostButton = document.querySelector("form button[type='submit']");

// /**
//  * @event
//  * @description Event listener for creating a post when the button is clicked.
//  */
// createPostButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     const titlePost = document.querySelector("#postTitle");
//     const title = titlePost.value;
//     // Check if title is empty
//     if (!title) {
//         titlePost.classList.add("border-danger");
//         titlePost.placeholder = "Title is required";
//     } else {
//         createPost();
//     }
// });

// /**
//  * @function createPost
//  * @async
//  * @description Create a new post using the specified data.
//  *
//  * @returns {Promise<void>}
//  */
// async function createPost() {
//     try {
//         const title = document.querySelector("#postTitle").value;

//         const body = document.querySelector("#postContent").value;

//         const token = localStorage.getItem("accessToken");

//         const fetchOptions = {
//             method: "POST",
//             body: JSON.stringify({
//                 title: title,
//                 body: body,
//                 author: localStorage.getItem("userId"), // Add the author parameter to the post data
//             }),
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//             },
//         };

//         const response = await fetch(
//             `https://api.noroff.dev/api/v1/social/posts`,
//             fetchOptions
//         );

//         const responseData = await response.json();

//         console.log(responseData);

//         // Store the current scroll position in localStorage
//         localStorage.setItem("scrollPosition", window.scrollY);

//         // Reload the page after editing the post
//         window.location.reload();
//     } catch (error) {
//         console.error("An error occurred:", error);
//     }
// }

// // Event listener for creating a post
// const createPostButton = document.querySelector("form button[type='submit']");

// /**
//  * @event
//  * @description Event listener for creating a post when the button is clicked.
//  */
// createPostButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     const titlePost = document.querySelector("#postTitle");
//     const title = titlePost.value;
//     // Check if title is empty
//     if (!title) {
//         titlePost.classList.add("border-danger");
//         titlePost.placeholder = "Title is required";
//     } else {
//         createPost();
//     }
// });


async function createPost() {
    try {
        const title = document.querySelector("#postTitle").value;
        const body = document.querySelector("#postContent").value;
        const token = localStorage.getItem("accessToken");

        const fetchOptions = {
            method: "POST",
            body: JSON.stringify({
                title: title,
                body: body,
                author: localStorage.getItem("userId"),
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(
            `https://api.noroff.dev/api/v1/social/posts`,
            fetchOptions
        );

        const responseData = await response.json();

        console.log(responseData);

        // Retrieve the newly created post
        const newPost = await getPost(responseData.id);

        // Store the current scroll position in localStorage
        localStorage.setItem("scrollPosition", window.scrollY);

        // Reload the page after creating the post
        window.location.reload();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

async function getPost(postId) {
    const token = localStorage.getItem("accessToken");

    const fetchOptions = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(
        `https://api.noroff.dev/api/v1/social/posts/${postId}`,
        fetchOptions
    );

    const responseData = await response.json();

    console.log(responseData);

    return responseData;
}

// Event listener for creating a post
const createPostButton = document.querySelector("form button[type='submit']");

/**
 * @event
 * @description Event listener for creating a post when the button is clicked.
 */
createPostButton.addEventListener("click", (event) => {
    event.preventDefault();
    const titlePost = document.querySelector("#postTitle");
    const title = titlePost.value;
    // Check if title is empty
    if (!title) {
        titlePost.classList.add("border-danger");
        titlePost.placeholder = "Title is required";
    } else {
        createPost();
    }
});