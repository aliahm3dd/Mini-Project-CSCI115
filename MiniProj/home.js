function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Fill all required fields.");
        return false;
    }

    alert("Submitted successfully!");
    return true;
}

function showSpecial() {
    alert("Today's Special: Kabsa ");
}