let profileBody = document.getElementById("profileBody");
let profileModal = document.getElementById("profileModal");
let overlay = document.getElementById('overlay');

function openModal(){
    profileBody.style.display = "none";
    overlay.style.display = "block";
    profileModal.style.display = "block";
}
function closeModal() {
    profileBody.style.display = "flex";
    overlay.style.display = "";
    profileModal.style.display = "none";
}
