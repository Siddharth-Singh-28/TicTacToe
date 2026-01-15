# 🎮 Tic Tac Toe Game

A classic **Tic Tac Toe** game built using **HTML, CSS, and JavaScript**, featuring a clean UI, sound effects, win highlighting, and restart functionality.  
This project demonstrates strong fundamentals in **DOM manipulation**, **game logic**, and **UI interaction**.

---

## 🚀 Features

- 🎯 Two-player gameplay (X vs O)
- 🎨 Modern dark-themed UI
- 🔊 Sound effects for:
  - Cell clicks
  - Winning the game
- 🏆 Automatic win detection
- ✨ Highlights the 3 winning cells
- 🤝 Detects draw situations
- 🔄 Restart game functionality
- 🧠 Clean and readable JavaScript logic

---

## 🖼️ Screenshots

<!-- Add your screenshots here -->
<!-- Example:
![Screenshot 1](screenshots/screen1.png)
-->

### 📸 Gameplay View
<img width="720" height="720" alt="Screenshot 2026-01-15 134720" src="https://github.com/user-attachments/assets/6cff9bcc-1939-492d-873a-adfde99a2c2a" />


### 📸 Winning State Highlight
<img width="720" height="720" alt="Screenshot 2026-01-15 134736" src="https://github.com/user-attachments/assets/c234a347-b8d1-4154-8c4f-5a42d84cf7b9" />


### 📸 Draw / Restart State
<img width="720" height="720" alt="Screenshot 2026-01-15 135109" src="https://github.com/user-attachments/assets/983864d6-efa7-4584-a5a1-cb44181c73ae" />


---

## 🛠️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Layout, grid, styling
- **JavaScript (ES6)** – Game logic & interactivity
- **Audio API** – Sound effects (`.wav`)

---

## 🧠 How the Game Works

- The game board is represented internally using a **9-element array**
- Players take turns clicking on empty cells
- After every move:
  - The game checks for a **winning combination**
  - If found, the winning cells are highlighted
  - A winning sound is played
- If all cells are filled without a winner, the game ends in a **draw**
- The **Restart** button resets the game state completely

---

## ▶️ How to Run Locally

1. Clone the repository
   ```bash
   git clone <https://github.com/Siddharth-Singh-28/TicTacToe>

└── sounds/
├── click.wav
└── win.wav

