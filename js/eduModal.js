// Get the modal
var eduModal = document.getElementById('eduModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === eduModal) {
        eduModal.style.display = "none";
    }
}