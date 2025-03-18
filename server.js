const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Función para leer libros desde books.json
const getBooks = () => {
    const data = fs.readFileSync(path.join(__dirname, "books.json"), "utf8");
    return JSON.parse(data);
};

// Ruta para obtener libros
app.get("/books", (req, res) => {
    const books = getBooks();
    res.json(books);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`📚 Server running on http://localhost:${PORT}`);
});