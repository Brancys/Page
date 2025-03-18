const API_URL = "http://localhost:5000/api";

// Registro de usuario
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    }).then(res => res.json())
      .then(data => alert(data.message))
      .catch(err => console.error(err));
}

// Login de usuario
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    }).then(res => res.json())
      .then(data => {
          if (data.token) {
              localStorage.setItem("token", data.token);
              loadBooks();
          } else {
              alert("Login failed");
          }
      }).catch(err => console.error(err));
}

// Cargar libros
function loadBooks() {
    fetch(`${API_URL}/books`)
        .then(res => res.json())
        .then(data => {
            const bookList = document.getElementById("book-list");
            bookList.innerHTML = "";
            data.forEach(book => {
                const li = document.createElement("li");
                li.textContent = `${book.title} by ${book.author}`;
                bookList.appendChild(li);
            });
            document.getElementById("auth").style.display = "none";
            document.getElementById("books-section").style.display = "block";
        }).catch(err => console.error(err));
}

// Logout
function logout() {
    localStorage.removeItem("token");
    document.getElementById("auth").style.display = "block";
    document.getElementById("books-section").style.display = "none";
}