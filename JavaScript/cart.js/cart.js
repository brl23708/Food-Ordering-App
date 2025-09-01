let cart = [];

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let subtotal = 0;
  cart.forEach((item, index) => {
    subtotal += item.price;
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${item.name} - $${item.price.toFixed(2)}
      <button class="btn btn-sm btn-outline-danger" onclick="removeItem(${index})">x</button>
    `;
    cartItems.appendChild(li);
  });

  const tax = subtotal * 0.10; // 10% tax
  const delivery = subtotal > 0 ? 3.00 : 0.00;
  const total = subtotal + tax + delivery;

  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("delivery").textContent = delivery.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("checkout-total").textContent = total.toFixed(2);
  document.getElementById("cart-count").textContent = cart.length;

  // Update mobile footer
  document.getElementById("mobile-cart-count").textContent = cart.length;
  document.getElementById("mobile-subtotal").textContent = subtotal.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Add event listeners for all add-to-cart buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    cart.push({ name, price });
    updateCart();
  });
});
