// LOGIN
function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "CSCSUNNY" && password === "12345") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "admin.html";
  } else {
    document.getElementById("error").innerText = "Wrong Username or Password!";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// PROTECT PAGE
if (window.location.pathname.includes("admin.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

// CUSTOMER DATA
let customers = JSON.parse(localStorage.getItem("customers")) || [
  { name: "Rahul Sharma", service: "PAN Card", status: "Pending" },
  { name: "Anita Devi", service: "Voter ID", status: "Pending" },
  { name: "Rakesh Kumar", service: "Passport", status: "Pending" }
];

// LOAD TABLE
function loadCustomers() {
  let table = document.getElementById("customerTable");
  if (!table) return;

  table.innerHTML = "";

  customers.forEach((cust, index) => {
    table.innerHTML += `
      <tr>
        <td>${cust.name}</td>
        <td>${cust.service}</td>
        <td>${cust.status}</td>
        <td>
          <button onclick="approve(${index})">Approve</button>
          <button onclick="reject(${index})">Reject</button>
        </td>
      </tr>
    `;
  });
}

// APPROVE
function approve(index) {
  customers[index].status = "Approved";
  saveData();
}

// REJECT
function reject(index) {
  customers[index].status = "Rejected";
  saveData();
}

// SAVE + REFRESH
function saveData() {
  localStorage.setItem("customers", JSON.stringify(customers));
  loadCustomers();
}

// INIT
loadCustomers();
