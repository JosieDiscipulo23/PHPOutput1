document.getElementById("registration-form").addEventListener("submit", function(event) {
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var contactNumber = document.getElementById("contact_number").value;

    if (age.trim() === "") {
        alert("Please enter your age.");
        event.preventDefault();
        return;
    }

    if (gender === "") {
        alert("Please select your gender.");
        event.preventDefault();
        return;
    }

    if (email.trim() === "") {
        alert("Please enter your email.");
        event.preventDefault();
        return;
    }

    if (address.trim() === "") {
        alert("Please enter your address.");
        event.preventDefault();
        return;
    }

    if (contactNumber.trim() === "") {
        alert("Please enter your contact number.");
        event.preventDefault();
        return;
    }

    // You can add more complex validation here if needed

});