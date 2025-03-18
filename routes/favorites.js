const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

let userFavorites = {};

// Agregar libro a favoritos
router.post("/add", authMiddleware, (req, res) => {
    const { bookId } = req.body;
    const userId = req.user.id;

    if (!userFavorites[userId]) {
        userFavorites[userId] = [];
    }

    if (!userFavorites[userId].includes(bookId)) {
        userFavorites[userId].push(bookId);
    }

    res.json({ message: "Book added to favorites", favorites: userFavorites[userId] });
});

// Obtener favoritos
router.get("/", authMiddleware, (req, res) => {
    const userId = req.user.id;
    res.json({ favorites: userFavorites[userId] || [] });
});

module.exports = router;