
document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");
  const createForm = document.getElementById("createForm");

  // Create account
  if (createForm) {
    createForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("newUsername").value.trim();
      const password = document.getElementById("newPassword").value;

      if (!username || !password) {
        alert("Please enter all details.");
        return;
      }

      localStorage.setItem("royalPayUser", username);
      localStorage.setItem("royalPayPassword", password);

      alert("Account created successfully!");
      createForm.reset();
    });
  }

  // Login
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      const savedUser = localStorage.getItem("royalPayUser");
      const savedPassword = localStorage.getItem("royalPayPassword");

      if (username === savedUser && password === savedPassword && savedUser) {
        alert("Welcome to Royal Pay!");
        document.getElementById("loginSection").classList.add("hidden");

        const dashboard = document.getElementById("dashboard");
        if (dashboard) dashboard.classList.remove("hidden");
      } else {
        alert("Invalid username or password.");
      }
    });
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      document.getElementById("dashboard").classList.add("hidden");
      document.getElementById("loginSection").classList.remove("hidden");
    });
  }

});
