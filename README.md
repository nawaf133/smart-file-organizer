# Smart File Organizer

Author: **Nawaf**  
GitHub: [https://github.com/nawaf133](https://github.com/nawaf133)  
© 2026 Nawaf. All rights reserved.

---

## Description
Smart File Organizer is a **web-based tool** that automatically organizes your files into folders based on their type:  

- **Images** (jpg, png, gif, bmp, jpeg)  
- **Videos** (mp4, avi, mov, mkv)  
- **Documents** (pdf, docx, txt, xlsx)  
- **Archives** (zip, rar, 7z)  
- **Others** (any other file types)

It comes with a **clean interface**, **Undo feature**, **Progress Bar**, and **Dark Mode**.  

---

## Features
- Organize any folder on your computer with a single click.  
- Undo the last organization operation.  
- Dark Mode toggle for better visibility.  
- Progress bar shows organizing progress.  
- Logs moved files automatically in `server/log.json`.  

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/nawaf133/smart-file-organizer.git





Navigate to the project folder:

cd smart-file-organizer


Install dependencies:

npm install


Start the server:

npm start


Open your browser at http://localhost:3000

How to Use

Enter the folder path you want to organize.

Click Organize Files to organize all files.

To undo the last operation, click Undo Last.

Use the Dark Mode checkbox to switch themes.

File Structure
smart-file-organizer/
│
├── server/
│   ├── index.js          # Server + API
│   ├── fileOrganizer.js  # File organizing logic
│   └── log.json          # Stores logs for undo feature
│
├── client/
│   ├── index.html        # User interface
│   ├── app.js            # Frontend JS
│   └── styles.css        # Styling
│
├── package.json
└── README.md

Screenshots

(Add your own screenshots here after testing the project)

License

© 2026 Nawaf. All rights reserved.
This project is developed and maintained by Nawaf.

Notes

Works on Windows, Mac, and Linux (ensure the folder path format is correct).

The project is 100% yours, all rights belong to Nawaf.

You can further customize categories or interface colors as you like.