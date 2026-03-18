function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  if (username === "CSCSUNNY" && password === "12345") {
    localStorage.setItem("loggedIn", "true");
    alert("Login Successful!");
    window.location.href = "admin.html";
  } else {
    alert("Invalid Username or Password");
  }
}
