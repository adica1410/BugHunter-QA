
const express = require("express");

const app = express();
const PORT = 3000;

// Demo product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 49.99
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 79.99
    },
    {
        id: 3,
        name: "Gaming Controller",
        price: 39.99
    }
];

// GET all products
app.get("/api/products", (req, res) => {
    res.status(200).json(products);
});


app.get("/api/products/:id", (req, res) => {

    const productId = Number(req.params.id);

    const product = products.find(
        item => item.id === productId
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);

});


// Start API server
app.listen(PORT, () => {
    console.log(`BugHunter API running at http://localhost:${PORT}`);
});
