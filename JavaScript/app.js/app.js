let cart = [];

// Load menu from JSON
fetch("data/menu.json")
    .then(res => res.json())
    .then(data => {
        renderMenu(data);
    });

function addToCart(item) {
    const found = cart.find(i => i.id === item.id);
    if (found) {
        found.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function calculateTotals() {
    let subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    let tax = subtotal * 0.1;
    let delivery = cart.length > 0 ? 5 : 0;
    let total = subtotal + tax + delivery;

    return { subtotal, tax, delivery, total };
}
