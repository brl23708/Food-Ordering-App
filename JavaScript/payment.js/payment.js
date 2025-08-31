document.getElementById("paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Payment Successful! 🎉 Your order has been placed.");
    cart = [];
    updateCartUI();
    bootstrap.Modal.getInstance(document.getElementById("paymentModal")).hide();
});
