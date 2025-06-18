# 🎵 Spotify Lyrics Font Size & Font Changer (Chrome Extension)

This Chrome extension allows you to **customize the font size and font family** of lyrics in Spotify's fullscreen mode.

Whether you want bigger text for visibility or prefer a different system font for aesthetic reasons, this tool gives you control — and **remembers your settings** automatically across sessions.

---

## 🔧 Features

- ✅ Change **lyrics font size** with a slider
- ✅ Choose from system fonts like **Arial**, **Georgia**, **Courier New**, and more
- ✅ Automatically **saves your settings** to Chrome local storage
- ✅ **Applies styles automatically** whenever lyrics are displayed
- ✅ Works with **Spotify Web Player** in fullscreen lyrics mode

---

## 🖼 Preview

> _(Optional: Add screenshots or a GIF here once you've pushed to GitHub)_

---

## 🚀 Installation (for development)

1. **Clone the repo:**

2. **Load as a Chrome extension:**

   - Go to `chrome://extensions/` in your browser
   - Enable **Developer Mode** (top right)
   - Click **"Load unpacked"**
   - Select the project folder

3. Open [Spotify Web Player](https://open.spotify.com/)  
   Play a song, open fullscreen lyrics (`[data-testid="fullscreen-lyric"]`), and watch your font settings apply automatically.

---

## ⚙️ How It Works

- The extension injects a `content.js` script into Spotify pages.
- It waits for lyrics to appear, then applies your selected **font size** and **font family** to all fullscreen lyrics.
- Your settings are stored using `chrome.storage.local` so they're **persisted between sessions**.
- Even when you switch songs or re-open lyrics, your preferences are **automatically re-applied**.

---

## 📁 Project Structure

```plaintext
spotify-lyrics-font-size-change/
│
├── manifest.json         # Chrome extension manifest
├── popup.html            # Extension popup UI
├── popup.js              # Handles UI interactions & saves settings
├── content.js            # Injected into Spotify to modify lyrics
├── styles.css            # Optional CSS for popup styling
└── README.md             # You are here :)
```

---

## 🔒 Permissions

This extension only requires access to:

```json
"permissions": ["activeTab", "storage"]
```

It **does not collect or transmit** any personal data.

---

## 🙌 Contributing

Feel free to fork this repo and improve it! Ideas welcome:

- Add support for font color or weight
- Enable custom font input
- Add animations or accessibility options

---

## 🧪 Known Limitations

- Only works in **fullscreen lyrics view**
- May not work if Spotify changes its internal DOM structure (we rely on `data-testid="fullscreen-lyric"`)

---

## 📜 License

MIT License. Feel free to use, modify, and share.

---

## ✨ Author

Made with ❤️ by [@John93562](https://github.com/John93562)
