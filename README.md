# Dev Snippets Manager

A modern full-stack web application that helps developers save, organize, search, and manage code snippets in one place.

Think of it as your personal developer code library.

---

## ✨ Overview

Developers often reuse code snippets, commands, and boilerplate code across projects.

Instead of searching through old files, notes, or browser bookmarks every time, Dev Snippets Manager provides a clean and fast way to store everything in one place.

Users can:

- Save reusable snippets
- Organize them by language
- Search instantly
- Mark favorites
- Edit anytime
- Delete anytime
- Export and import their snippets
- Access them from anywhere through cloud sync

---

# 🚀 Features

## 🔐 Authentication

Powered by Firebase Authentication.

- Register with email/password
- Login securely
- Logout
- Session persistence

Each user has access only to their own snippets.

---

## 📝 Snippet Management

Full CRUD support.

Users can:

- Add snippet
- Edit snippet
- Delete snippet
- Copy snippet instantly

---

## ⭐ Favorites

Save important snippets as favorites.

Quickly filter and access them from the sidebar.

---

## 🔍 Search

Fast live search by:

- Title
- Programming language
- Code content
- Tags

---

## ☁️ Cloud Storage

Powered by Firebase Firestore.

Snippets are stored in the cloud and synced across devices.

---

## 📤 Export / Import JSON

Backup and restore your snippets anytime.

Users can:

- Export snippets as JSON
- Import snippets from JSON

Useful for:

- Backup
- Migration
- Sharing libraries between accounts

---

## 🎨 Syntax Highlighting

Code is displayed with syntax highlighting for better readability.

Supports:

- JavaScript
- React
- CSS
- HTML
- SQL
- Bash
- Git commands
- and more

---

## 🌙 Dark Mode

Built-in light and dark mode support.

---

## 📱 Responsive Design

Works across:

- Desktop
- Tablet
- Mobile

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- CSS

## Backend / Cloud

- Firebase Authentication
- Firebase Firestore

## Routing

- React Router DOM

## Code Rendering

- react-syntax-highlighter

---

# 📂 Project Structure

```bash
dev-snippets-manager/

├── public/

├── src/
│
├── components/
│   ├── AddSnippetForm.jsx
│   ├── DataAction.jsx
│   ├── EditSnippetModal.jsx
│   ├── EmptyState.jsx
│   ├── Header.jsx
│   ├── ProtectedRoute.jsx
│   ├── Sidebar.jsx
│   ├── SnippetCard.jsx
│   ├── SnippetForm.jsx
│   └── SnippetsGrid.jsx
│
├── context/
│   └── AuthProvider.jsx
│
├── firebase/
│   ├── firebase.js
│   └── snippetsService.js
│
├── pages/
│   ├── Login.jsx
│   └── Register.jsx
│
├── data/
│   └── Snippets.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

# ⚙️ Installation
## Clone repository
```bash
git clone https://github.com/YOUR_USERNAME/dev-snippets-manager.git
```

## Enter project folder
```bash
cd dev-snippets-manager
```

## Install dependencies
```bash
npm install
```

## Start development server
```bash
npm run dev
```

# 🔥 Firebase Setup

## Create a Firebase project from:
```bash
https://console.firebase.google.com/
```

Enable:

Authentication → Email/Password
Firestore Database

Then configure:
```bash
src/firebase/firebase.js
```

with your Firebase credentials.

# 🎯 Future Improvements

## Planned next features:

- Share snippets via URL
- Tags management page
- Folder organization
- Snippet collections
- Public snippets
- User profile
- Copy history
- Snippet analytics
- Deploy on Vercel
- Custom domain

# 👨‍💻 Author

Ahmed Djabrane Mammadi

GitHub:
https://github.com/djabranemmd

# 📄 License

MIT License

Built with ❤️ for developers