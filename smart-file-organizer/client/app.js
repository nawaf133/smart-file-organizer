/**
 * Frontend JS for Smart File Organizer
 * Author: Nawaf
 * © 2026 All rights reserved
 */

const organizeBtn = document.getElementById('organizeBtn');
const undoBtn = document.getElementById('undoBtn');
const output = document.getElementById('output');
const folderInput = document.getElementById('folderPath');
const darkModeToggle = document.getElementById('darkMode');
const progressBar = document.getElementById('progressBar');

// Dark mode toggle
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', darkModeToggle.checked);
});

// Organize files
organizeBtn.addEventListener('click', async () => {
    const folderPath = folderInput.value;
    if (!folderPath) return alert('Please enter a folder path');

    progressBar.style.width = '0%';
    output.textContent = 'Organizing files...';

    const response = await fetch('/api/organize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: folderPath })
    });

    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
    progressBar.style.width = '100%';
});

// Undo last organize
undoBtn.addEventListener('click', async () => {
    const response = await fetch('/api/undo', { method: 'POST' });
    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
    progressBar.style.width = '0%';
});
