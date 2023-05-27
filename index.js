let profileBody = document.getElementById("profileBody");
let profileModal = document.getElementById("profileModal");
let overlay = document.getElementById('overlay');

function openModal(){
    overlay.style.display = "block";
    profileModal.style.display = "block";
    profileBody.style.opacity = "30%"
}
function closeModal() {
    overlay.style.display = "none";
    profileModal.style.display = "none";
    profileBody.style.opacity = "100%"
}
