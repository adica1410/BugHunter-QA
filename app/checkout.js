
const savedCart = JSON.parse(
    sessionStorage.getItem("checkoutCart") || "[]"
);

const orderItems = document.getElementById("orderItems");
const orderTotal = document.getElementById("orderTotal");

let total = 0;

savedCart.forEach(function(item) {
    const li = document.createElement("li");

    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;

    orderItems.appendChild(li);

    total += item.price;
});

orderTotal.textContent = `Total: $${total.toFixed(2)}`;


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


    
sessionStorage.removeItem("checkoutCart");

checkoutForm.reset();

window.location.href = "confirmation.html";

});
