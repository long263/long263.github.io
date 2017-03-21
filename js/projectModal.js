// Get the modal
var projectModal = document.getElementById('projectModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == projectModal) {
        projectModal.style.display = "none";
    }
}