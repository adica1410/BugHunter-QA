
const checkoutForm = document.getElementById("checkoutForm");

checkoutForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();

    
const postalCodePattern = /^[0-9]{5}$/;

if (!postalCodePattern.test(zipCode)) {
    alert("Postal code must contain exactly 5 digits.");
    return;
}


    alert("Order placed successfully!");

    checkoutForm.reset();
});
