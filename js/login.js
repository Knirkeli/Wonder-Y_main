document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('goToLogin').addEventListener('click', function() {
        var myModal = bootstrap.Modal.getInstance(document.getElementById('mymodal'));
        myModal.hide();
        var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    });
});
