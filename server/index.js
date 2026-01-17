/**
 * Smart File Organizer - Server
 * Author: Nawaf
 * GitHub: https://github.com/nawaf133
 * © 2026 All rights reserved
 */

const express = require('express');
const path = require('path');
const { organize, undo } = require('./fileOrganizer');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json());

// Organize endpoint
app.post('/api/organize', (req, res) => {
    const folderPath = req.body.path;
    if (!folderPath) return res.status(400).json({ error: 'Folder path is required' });

    try {
        const result = organize(folderPath);
        res.json({ message: 'Files organized!', details: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Undo endpoint
app.post('/api/undo', (req, res) => {
    try {
        const result = undo();
        res.json({ message: 'Undo completed!', details: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
