function renderMenu(menu) {
  const container = document.getElementById("menu-container");
  menu.forEach(item => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${item.img}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">$${item.price.toFixed(2)}</p>
            <button class="btn btn-primary" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  });
}
//<img src="${item.img}" class="card-img-top" alt="${item.name}">

function updateCartUI() {
  const list = document.getElementById("cart-list");
  list.innerHTML = "";
  cart.forEach(i => {
    list.innerHTML += `
      <li class="list-group-item d-flex justify-content-between">
        ${i.name} (x${i.qty}) - $${(i.price * i.qty).toFixed(2)}
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${i.id})">x</button>
      </li>
    `;
  });

  const totals = calculateTotals();
  document.getElementById("subtotal").textContent = totals.subtotal.toFixed(2);
  document.getElementById("tax").textContent = totals.tax.toFixed(2);
  document.getElementById("delivery").textContent = totals.delivery.toFixed(2);
  document.getElementById("total").textContent = totals.total.toFixed(2);
}

// Checkout button
document.getElementById("checkoutBtn").addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById("paymentModal"));
  modal.show();
});
