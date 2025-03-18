document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/books")
        .then(response => response.json())
        .then(books => displayBooks(books))
        .catch(error => console.error("Error loading books:", error));
});

function displayBooks(books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Rating:</strong> ⭐${book.rating}</p>
            <p>${book.summary}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}