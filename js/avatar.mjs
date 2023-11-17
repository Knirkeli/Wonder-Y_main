// const API_BASE_URL = 'https://api.noroff.dev/api/v1';

// function openAvatarModal() {
//     const avatarModal = document.getElementById('avatarModal');
//     avatarModal.classList.add('show');
//     avatarModal.style.display = 'block';
// }

// function selectAvatar(avatar) {
//     const avatarInput = document.getElementById('userImage');
//     avatarInput.value = avatar;
//     const avatarModal = document.getElementById('avatarModal');
//     avatarModal.classList.remove('show');
//     avatarModal.style.display = 'none';
// }

// function closeAvatarModal() {
//     const avatarModal = document.getElementById('avatarModal');
//     avatarModal.classList.remove('show');
//     avatarModal.style.display = 'none';
// }

// const closeButtons = document.querySelectorAll('.btn-close, .btn-secondary');
// closeButtons.forEach(button => {
//     button.addEventListener('click', closeAvatarModal);
// });

// const swapButton = document.querySelector('#avatarModal .btn-primary');

// swapButton.addEventListener('click', async function() {
//     const newAvatar = document.getElementById('userImage').value;
//     const username = localStorage.getItem('username');
//     const accessToken = localStorage.getItem('accessToken');

//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${accessToken}`
//         },
//         body: JSON.stringify({ avatar: newAvatar })
//     };

//     const response = await fetch(`${API_BASE_URL}/social/profiles/${username}/media`, options);

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     closeAvatarModal();
//     const avatarElement = document.querySelector('#avatarImage');
//     avatarElement.src = newAvatar;
// });

// async function fetchUserProfile() {
//     const username = localStorage.getItem('username');
//     const accessToken = localStorage.getItem('accessToken');

//     const options = {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${accessToken}`
//         }
//     };

//     const response = await fetch(`${API_BASE_URL}/social/profiles/${username}`, options);

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const profileData = await response.json();
//     const avatarElement = document.querySelector('#avatarImage');
//     avatarElement.src = profileData.avatar;
// }

// fetchUserProfile();

/**
 * Base URL for the API.
 * @type {string}
 */
const API_BASE_URL = 'https://api.noroff.dev/api/v1';

/**
 * Opens the avatar modal.
 * @function
 */
function openAvatarModal() {
    const avatarModal = document.getElementById('avatarModal');
    avatarModal.classList.add('show');
    avatarModal.style.display = 'block';
}

/**
 * Selects an avatar and closes the avatar modal.
 * @function
 * @param {string} avatar - The URL of the avatar to select.
 */
function selectAvatar(avatar) {
    const avatarInput = document.getElementById('userImage');
    avatarInput.value = avatar;
    const avatarModal = document.getElementById('avatarModal');
    avatarModal.classList.remove('show');
    avatarModal.style.display = 'none';
}

/**
 * Closes the avatar modal.
 * @function
 */
function closeAvatarModal() {
    const avatarModal = document.getElementById('avatarModal');
    avatarModal.classList.remove('show');
    avatarModal.style.display = 'none';
}

/**
 * Buttons for closing the avatar modal.
 * @type {NodeListOf<Element>}
 */
const closeButtons = document.querySelectorAll('.btn-close, .btn-secondary');
closeButtons.forEach(button => {
    button.addEventListener('click', closeAvatarModal);
});

/**
 * Button for swapping the avatar.
 * @type {Element}
 */
const swapButton = document.querySelector('#avatarModal .btn-primary');

/**
 * Event listener for the swap button click event. Swaps the avatar and updates the avatar image.
 * @async
 * @function
 * @returns {Promise<void>}
 */
swapButton.addEventListener('click', async function() {
    const newAvatar = document.getElementById('userImage').value;
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ avatar: newAvatar })
    };

    const response = await fetch(`${API_BASE_URL}/social/profiles/${username}/media`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    closeAvatarModal();
    const avatarElement = document.querySelector('#avatarImage');
    avatarElement.src = newAvatar;
});

/**
 * Fetches the user profile and updates the avatar image.
 * @async
 * @function
 * @returns {Promise<void>}
 */
async function fetchUserProfile() {
    const username = localStorage.getItem('username');
    const accessToken = localStorage.getItem('accessToken');

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    };

    const response = await fetch(`${API_BASE_URL}/social/profiles/${username}`, options);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const profileData = await response.json();
    const avatarElement = document.querySelector('#avatarImage');
    avatarElement.src = profileData.avatar;
}

// Fetch the user profile when the script loads
fetchUserProfile();