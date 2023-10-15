export const displayPosts = async () => {
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

    // Get the container where the posts will be appended
    const container = document.querySelector(".container.col-12.pb-5 .row.gx-md-5");

    // Clear the container
    container.innerHTML = '';

    // Get the selected sort option
    const sortOption = document.querySelector("#sortOption").value;

    // Get the search term
    const searchTerm = document.querySelector("#searchPost").value;

    // Filter the posts based on the search term
    let filteredPosts = responseData;
    if (searchTerm) {
        filteredPosts = responseData.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sort the posts based on the selected option
    let sortedPosts;
    if (sortOption === "date") {
        sortedPosts = filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortOption === "title") {
        sortedPosts = filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Iterate over each post and create a card for it
    sortedPosts.forEach(post => {
        const card = `
    <div class="col-12 mt-5 col-lg-6" data-post-id="${post.id}">
        <div class="card">
            <div class="card-title text-center border-bottom">
                <h3>${post.title}</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-8 text-center ">
                        <p class="card-text">${post.body}</p>
                    </div>
                    <div class="col-2 text-center ">
                        <button type="button" class="btn btn-success my-btn" data-post-id="${post.id}" data-ponder-id="${post.ponderId}">Ponder this</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

        // Append the card to the container
        container.innerHTML += card;
    });
// Add event listener to the "Ponder this" buttons
const ponderButtons = document.querySelectorAll("button[data-post-id][data-ponder-id]");
ponderButtons.forEach(button => {
  button.addEventListener("click", () => {
    const postId = button.getAttribute("data-post-id");
    const ponderId = button.getAttribute("data-ponder-id");
    window.location.href = `ponder.html?id=${postId}&ponderId=${ponderId}`;
  });
});
};

// Call the function after the page has loaded
window.addEventListener('load', displayPosts);

// Add event listener to the sort option select element
const sortOption = document.querySelector("#sortOption");
sortOption.addEventListener("change", displayPosts);

// Add event listener to the search form
const searchForm = document.querySelector("form.d-flex.flex-column.flex-md-row");
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    displayPosts();
});