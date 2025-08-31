console.log("FoodieExpress Navbar Ready!");
// Switch from Login to Signup modal
document.getElementById("showSignup").addEventListener("click", function (e) {
  e.preventDefault();
  let loginModal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
  loginModal.hide();
  let signupModal = new bootstrap.Modal(document.getElementById("signupModal"));
  signupModal.show();
});

// Handle login form
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Logged in successfully! Unlocking special offers...");
});

// Handle signup form
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("🎉 Account created! You can now enjoy special offers.");
});
