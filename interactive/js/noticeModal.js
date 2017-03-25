// Get the modal
var noticeModal = document.getElementById('noticeModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == noticeModal) {
        noticeModal.style.display = "none";
    }
}