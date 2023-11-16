const API_BASE_URL = 'https://api.noroff.dev/api/v1';

function openAvatarModal() {
    const avatarModal = document.getElementById('avatarModal');
    avatarModal.classList.add('show');
    avatarModal.style.display = 'block';
}

function selectAvatar(avatar) {
    const avatarInput = document.getElementById('userImage');
    avatarInput.value = avatar;
    const avatarModal = document.getElementById('avatarModal');
    avatarModal.classList.remove('show');
    avatarModal.style.display = 'none';
}

function closeAvatarModal() {
    const avatarModal = document.getElementById('avatarModal');
    avatarModal.classList.remove('show');
    avatarModal.style.display = 'none';
}

const closeButtons = document.querySelectorAll('.btn-close, .btn-secondary');
closeButtons.forEach(button => {
    button.addEventListener('click', closeAvatarModal);
});

const swapButton = document.querySelector('#avatarModal .btn-primary');

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

fetchUserProfile();