const fetchPost = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    if (postId === null) {
        console.error("Post ID not found in URL");
        return;
    }

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

    // Update the HTML with the post data
    const postTitle = document.querySelector(".card-title h5");
    if (postTitle !== null) {
        postTitle.textContent = responseData.title;
    }

    const postImage = document.querySelector(".card-img-top");
    if (postImage !== null) {
        postImage.src = responseData.image;
    }

    const postBody = document.querySelector(".card-text");
    if (postBody !== null) {
        postBody.textContent = responseData.body;
    }
};

const button = document.querySelector("#fetch-post-button");
if (button !== null) {
    button.addEventListener("click", () => {
        console.log("Button clicked");
        fetchPost();
    });
}