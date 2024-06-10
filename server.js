const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 8080;

// Use CORS middleware
app.use(cors());

// Middleware to serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route to handle JSON request
app.get('/assets/uploads/files/files/others/ddugky_project.json', (req, res) => {
    const filePath = path.join(__dirname, 'assets/uploads/files/files/others/ddugky_project.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).json({ error: 'File not found' });
        }
    });
});

// Catch-all route for 404 errors
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
