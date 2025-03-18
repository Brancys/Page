document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const bookList = document.getElementById("bookList");

    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic", rating: 8.5, description: "A novel about the American Dream and tragic love." },
        { title: "1984", author: "George Orwell", category: "Dystopian", rating: 9.0, description: "A chilling vision of a totalitarian future." },
        { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", rating: 8.7, description: "A story about racial injustice in the Deep South." },
        { title: "Moby-Dick", author: "Herman Melville", category: "Adventure", rating: 7.5, description: "The epic tale of a man obsessed with a whale." },
        { title: "Pride and Prejudice", author: "Jane Austen", category: "Romance", rating: 9.2, description: "A timeless love story full of wit and charm." },
        { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", rating: 9.5, description: "A journey through Middle-earth filled with adventure." },
        { title: "Brave New World", author: "Aldous Huxley", category: "Sci-Fi", rating: 8.8, description: "A disturbing look at a futuristic society." },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Coming-of-Age", rating: 8.0, description: "The story of a rebellious teenager in NYC." },
        { title: "War and Peace", author: "Leo Tolstoy", category: "Historical Fiction", rating: 9.5, description: "A complex novel about Russian society during the Napoleonic Wars." },
        { title: "Crime and Punishment", author: "Fyodor Dostoevsky", category: "Philosophical", rating: 9.3, description: "A psychological novel about guilt and redemption." },
        { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", category: "Classic", rating: 9.4, description: "A philosophical exploration of morality, faith, and free will." },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fantasy", rating: 9.8, description: "An epic tale of good versus evil in Middle-earth." },
        { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", category: "Magical Realism", rating: 9.7, description: "A multi-generational story full of magical realism." },
        { title: "Don Quixote", author: "Miguel de Cervantes", category: "Classic", rating: 9.0, description: "A satirical novel about an aging knight and his adventures." },
        { title: "Dracula", author: "Bram Stoker", category: "Horror", rating: 8.5, description: "The story of Count Dracula and his influence in Victorian England." },
        { title: "Frankenstein", author: "Mary Shelley", category: "Gothic", rating: 8.8, description: "A classic tale of science, ambition, and consequences." },
        { title: "Jane Eyre", author: "Charlotte Brontë", category: "Romance", rating: 9.0, description: "A story of love, independence, and social class." },
        { title: "Wuthering Heights", author: "Emily Brontë", category: "Gothic", rating: 8.9, description: "A tragic love story set in the Yorkshire moors." },
        { title: "The Picture of Dorian Gray", author: "Oscar Wilde", category: "Philosophical", rating: 8.7, description: "A novel about vanity, morality, and the supernatural." },
        { title: "The Divine Comedy", author: "Dante Alighieri", category: "Poetry", rating: 9.5, description: "A journey through Hell, Purgatory, and Paradise." },
        { title: "The Odyssey", author: "Homer", category: "Epic", rating: 9.6, description: "A Greek hero's long journey home after the Trojan War." },
        { title: "The Iliad", author: "Homer", category: "Epic", rating: 9.4, description: "The story of the Trojan War and its heroes." },
        { title: "Les Misérables", author: "Victor Hugo", category: "Historical Fiction", rating: 9.3, description: "A story of redemption and justice in 19th-century France." },
        { title: "Anna Karenina", author: "Leo Tolstoy", category: "Classic", rating: 9.5, description: "A tragic romance about love, family, and society." },
        { title: "The Count of Monte Cristo", author: "Alexandre Dumas", category: "Adventure", rating: 9.6, description: "A thrilling tale of revenge and redemption." },
        { title: "Fahrenheit 451", author: "Ray Bradbury", category: "Dystopian", rating: 9.1, description: "A novel about a future where books are banned." },
        { title: "The Stranger", author: "Albert Camus", category: "Existential", rating: 8.6, description: "A philosophical novel about absurdism and detachment." },
        { title: "The Metamorphosis", author: "Franz Kafka", category: "Surreal", rating: 8.3, description: "A man wakes up transformed into a giant insect." },
        { title: "The Alchemist", author: "Paulo Coelho", category: "Inspirational", rating: 8.9, description: "A fable about following one's dreams." },
        { title: "The Old Man and the Sea", author: "Ernest Hemingway", category: "Classic", rating: 8.7, description: "An old fisherman's epic struggle with a marlin." },
        { title: "A Tale of Two Cities", author: "Charles Dickens", category: "Historical Fiction", rating: 9.0, description: "A novel set during the French Revolution." },
        { title: "Great Expectations", author: "Charles Dickens", category: "Classic", rating: 8.8, description: "The story of an orphan named Pip and his life journey." },
        { title: "Mere Christianity", author: "C.S. Lewis", category: "Theology", rating: 9.2, description: "A profound exploration of Christian beliefs." },
        { title: "Dune", author: "Frank Herbert", category: "Sci-Fi", rating: 9.5, description: "A sci-fi masterpiece about power and destiny." },
        { title: "The Shining", author: "Stephen King", category: "Horror", rating: 8.9, description: "A chilling novel about isolation and supernatural terror." },
        { title: "It", author: "Stephen King", category: "Horror", rating: 8.6, description: "A terrifying story about a shape-shifting entity." },
        { title: "The Road", author: "Cormac McCarthy", category: "Post-Apocalyptic", rating: 8.7, description: "A father and son struggle to survive in a devastated world." },
        { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", category: "Satire", rating: 8.8, description: "A war novel mixed with sci-fi and dark humor." },
        { title: "Beloved", author: "Toni Morrison", category: "Historical Fiction", rating: 9.0, description: "A powerful story about the legacy of slavery." }
    ];

    const colors = ["#ffadad", "#ffda77", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];

    function displayBooks(filteredBooks) {
        bookList.innerHTML = "";
        filteredBooks.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book");

            // Asignar color aleatorio
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            bookItem.style.backgroundColor = randomColor;

            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Category:</strong> ${book.category}</p>
                <p><strong>Rating:</strong> ${book.rating}/10</p>
                <p class="description">${book.description}</p>
                <button class="toggle-description">Show Description</button>
            `;
            bookList.appendChild(bookItem);

            // Evento para mostrar descripción
            const description = bookItem.querySelector(".description");
            description.style.display = "none";
            bookItem.querySelector(".toggle-description").addEventListener("click", function () {
                if (description.style.display === "none") {
                    description.style.display = "block";
                    this.textContent = "Hide Description";
                } else {
                    description.style.display = "none";
                    this.textContent = "Show Description";
                }
            });
        });
    }

    searchBar.addEventListener("input", function () {
        const query = searchBar.value.toLowerCase();
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.category.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    });

    displayBooks(books);
});