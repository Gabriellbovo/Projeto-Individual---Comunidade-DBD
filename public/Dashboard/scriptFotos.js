function openModal() {
    document.getElementById('myModal').style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Function to change the avatar and save it in localStorage
function changeAvatar(imagePath) {
    document.getElementById('userAvatar').style.backgroundImage = `url(${imagePath})`;
    localStorage.setItem('userAvatar', imagePath);
    closeModal();
}

// Function to load the avatar from localStorage
function loadAvatar() {
    const savedAvatar = localStorage.getItem('userAvatar');
    if (savedAvatar) {
        document.getElementById('userAvatar').style.backgroundImage = `url(${savedAvatar})`;
    }
}

// Load the avatar when the page loads
window.onload = loadAvatar;
