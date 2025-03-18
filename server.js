const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Cargar datos desde JSON
const users = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
const movies = JSON.parse(fs.readFileSync('data/movies.json', 'utf8'));
const favorites = JSON.parse(fs.readFileSync('data/favorites.json', 'utf8'));

// Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({ success: true, user: { email: user.email, name: user.name } });
});

// Obtener películas
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Obtener detalles de una película
app.get('/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) {
        return res.status(404).json({ success: false, message: 'Movie not found' });
    }
    res.json(movie);
});

// Agregar a favoritos
app.post('/favorites', (req, res) => {
    const { email, movieId } = req.body;

    if (!email || !movieId) {
        return res.status(400).json({ success: false, message: "Missing data" });
    }

    if (!favorites[email]) {
        favorites[email] = [];
    }

    if (!favorites[email].includes(movieId)) {
        favorites[email].push(movieId);
    }

    fs.writeFileSync('data/favorites.json', JSON.stringify(favorites, null, 2));
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});