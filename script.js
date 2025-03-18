document.addEventListener("DOMContentLoaded", function () {
    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "Moby-Dick", author: "Herman Melville" },
        { title: "Pride and Prejudice", author: "Jane Austen" },
        { title: "War and Peace", author: "Leo Tolstoy" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger" },
        { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "Brave New World", author: "Aldous Huxley" },
        { title: "Fahrenheit 451", author: "Ray Bradbury" },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
        { title: "Jane Eyre", author: "Charlotte Brontë" },
        { title: "Wuthering Heights", author: "Emily Brontë" },
        { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
        { title: "Dracula", author: "Bram Stoker" },
        { title: "Frankenstein", author: "Mary Shelley" },
        { title: "The Odyssey", author: "Homer" },
        { title: "Don Quixote", author: "Miguel de Cervantes" },
        { title: "Les Misérables", author: "Victor Hugo" }
    ];

    const bookList = document.getElementById("bookList");
    const searchBar = document.getElementById("searchBar");

    function displayBooks(filteredBooks) {
        bookList.innerHTML = "";
        filteredBooks.forEach(book => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("book");
            bookDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
            bookList.appendChild(bookDiv);
        });
    }

    searchBar.addEventListener("input", function (e) {
        const searchText = e.target.value.toLowerCase();
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText)
        );
        displayBooks(filteredBooks);
    });

    displayBooks(books); // Muestra todos los libros al inicio
});