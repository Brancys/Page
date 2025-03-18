const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const usersFilePath = path.join(__dirname, "../data/users.json");

// Leer usuarios desde el JSON
const readUsers = () => {
    if (!fs.existsSync(usersFilePath)) return [];
    return JSON.parse(fs.readFileSync(usersFilePath, "utf8"));
};

// Guardar usuarios en el JSON
const writeUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Registro de usuario
router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    let users = readUsers();

    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { id: users.length + 1, email, password: hashedPassword };
    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ message: "User registered successfully" });
});

// Login de usuario
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();

    const user = users.find(u => u.email === email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, "secretKey", { expiresIn: "1h" });
    res.json({ token });
});

module.exports = router;