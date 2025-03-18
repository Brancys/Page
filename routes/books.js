const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const booksFilePath = path.join(__dirname, "../data/books.json");

// Obtener lista de libros
router.get("/", (req, res) => {
    fs.readFile(booksFilePath, "utf8", (err, data) => {
        if (err) return res.status(500).json({ message: "Error reading books" });
        res.json(JSON.parse(data));
    });
});

module.exports = router;