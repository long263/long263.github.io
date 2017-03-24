// Get the modal
var expModal = document.getElementById('expModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == expModal) {
        expModal.style.display = "none";
    }
}