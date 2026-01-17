# Smart File Organizer 📂

[![Python](https://img.shields.io/badge/Python-3.9+-blue)](https://www.python.org/)
[![Discord.py](https://img.shields.io/badge/Discord.py-2.3.2-blue)](https://discordpy.readthedocs.io/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Smart File Organizer** is a fast, lightweight Discord bot that automatically organizes and sorts files in your directories or server channels using slash commands. Designed to be simple, reliable, and ready for deployment.

---

## ⚡ Features

- ✅ Slash command support for easy interaction
- 📁 Automatic file sorting by type, date, or custom rules
- 📩 DM notifications when organization tasks are complete
- 🧹 Optional cleanup of duplicate or unnecessary files
- 🌐 Works with local directories or cloud storage links
- 🛠 Lightweight and easy to deploy anywhere
- 🔒 Privacy-focused: Only accesses files you allow

---

## 📝 Commands

| Command           | Description                                   |
|------------------|-----------------------------------------------|
| `/organize`       | Automatically sort files in a folder or channel |
| `/status`         | Check bot status and last organization task  |
| `/setrules`       | Customize file organization rules             |

**Example usage:**
```bash
/organize path:/Users/Nawaf/Downloads method:type

⚙️ Installation

Clone the repository:

git clone https://github.com/nawaf133/smart-file-organizer.git
cd smart-file-organizer


Install dependencies:

pip install -r requirements.txt


Create a .env file in the project root:

DISCORD_TOKEN=YOUR_BOT_TOKEN_HERE


Run the bot:

python bot.py


💡 Make sure Python 3.9+ is installed on your system for full functionality.

🖥 Supported Platforms

Local directories on your system

Cloud storage links (optional, if integrated)

Discord channels (downloads or attachments)

🧾 Ownership & License

Developed and maintained by @_I42
Licensed under the MIT License – free to use and modify, but original credit must remain.

🎯 Notes

Users must have DMs enabled to receive notifications.

Large folders may take longer depending on number of files.

All operations are logged and optionally reversible for safety.

Made with ❤️ for simple, efficient, and practical file organization on Discord.
