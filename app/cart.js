
const cart = [];

const products = {
    headphones: {
        name: "Wireless Headphones",
        price: 49.99
    },
    watch: {
        name: "Smart Watch",
        price: 79.99
    },
    controller: {
        name: "Gaming Controller",
        price: 39.99
    }
};


function addToCart(productId) {
    const product = products[productId];

    if (!product) {
        return;
    }

    cart.push(product);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    document.getElementById("cartCount").textContent =
        `🛒 Cart: ${cart.length} items`;

    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(function(item, index) {
        const li = document.createElement("li");

        const productText = document.createElement("span");
        productText.textContent =
            `${item.name} - $${item.price.toFixed(2)}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.addEventListener("click", function() {
            removeFromCart(index);
        });

        li.appendChild(productText);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    
const total = cart.reduce(function(sum, item) {
    return sum + item.price;
}, 0);


document.getElementById("cartTotal").textContent =
    `Total: $${total.toFixed(2)}`;

    document.getElementById("checkoutButton").disabled =
    cart.length === 0;

}

function goToCheckout() {
    if (cart.length === 0) {
        return;
    }

    sessionStorage.setItem("checkoutCart", JSON.stringify(cart));

    window.location.href = "checkout.html";
}



