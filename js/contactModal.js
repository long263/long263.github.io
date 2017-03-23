// Get the modal
var contactModal = document.getElementById('contactModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}