// Get the modal
var skillModal = document.getElementById('skillModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == skillModal) {
        skillModal.style.display = "none";
    }
}