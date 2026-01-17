/**
 * Smart File Organizer - File Organizer Module
 * Author: Nawaf
 * GitHub: https://github.com/nawaf133
 * © 2026 Nawaf. All rights reserved.
 */

const fs = require('fs');
const path = require('path');

const fileCategories = {
    Images: ['.jpg', '.jpeg', '.png', '.gif', '.bmp'],
    Videos: ['.mp4', '.avi', '.mov', '.mkv'],
    Documents: ['.pdf', '.docx', '.txt', '.xlsx'],
    Archives: ['.zip', '.rar', '.7z'],
    Others: []
};

/**
 * Organizes files in the given folder into subfolders by type
 * Saves log for undo
 * @param {string} folderPath
 * @returns {Array} log of moved files
 */
function organize(folderPath) {
    if (!fs.existsSync(folderPath)) throw new Error('Folder does not exist');

    const files = fs.readdirSync(folderPath);
    const log = [];

    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        let category = 'Others';

        for (const key in fileCategories) {
            if (fileCategories[key].includes(ext)) category = key;
        }

        const targetFolder = path.join(folderPath, category);
        if (!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder);

        const oldPath = path.join(folderPath, file);
        const newPath = path.join(targetFolder, file);

        fs.renameSync(oldPath, newPath);
        log.push({ file, from: folderPath, to: targetFolder });
    });

    // Save log for undo
    fs.writeFileSync(path.join(__dirname, 'log.json'), JSON.stringify(log, null, 2));

    return log;
}

/**
 * Undo last organize operation
 */
function undo() {
    const logPath = path.join(__dirname, 'log.json');
    if (!fs.existsSync(logPath)) return [];

    const log = JSON.parse(fs.readFileSync(logPath));
    log.forEach(item => {
        const oldPath = path.join(item.to, item.file);
        const newPath = path.join(item.from, item.file);
        if (fs.existsSync(oldPath)) fs.renameSync(oldPath, newPath);
    });

    fs.unlinkSync(logPath);
    return log;
}

module.exports = { organize, undo };
