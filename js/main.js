//login validation using modal
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("validationServer01");
    let password = document.getElementById("validationServer02");

    if (email.value === "" || password.value === "") {
        let myModal = new bootstrap.Modal(document.getElementById('validationModal'));
        myModal.show();
    } else {
        
        alert("Form is valid! Proceed with login.");
    }
});
