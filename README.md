# DarsiPushkar-ZeroCode-fe-assignment
# 💬 ZeroCode Chatbot App

A simple, fully responsive chatbot web application built using **React**, **TypeScript**, and **Tailwind CSS**. This app includes user registration, login, authentication with localStorage, and a chat interface with dummy bot replies. Bonus features include **voice input** and **prompt templates**.

---

## 🚀 Live Demo

🔗 [https://your-deployed-url.vercel.app]([https://your-deployed-url.vercel.app)](https://darsi-pushkar-zero-code-fe-assignme.vercel.app/)

** I have used session based approach. So every laptop has it's own local storage. First time you have register definitely.
Example:
- Email: `pushkar@gmail.com`  
- Password: `123456`

---

## 📁 Project Structure

src/
├── pages/
│ ├── Chat.tsx # Chat interface
│ ├── Login.tsx # Login page
│ └── Register.tsx # Registration page
├── utils/
│ └── auth.ts # Auth helper functions using localStorage
├── App.tsx # App routing
├── index.tsx # App entry point
└── index.css # Tailwind CSS import


---

## 🛠️ Tech Stack

- ⚛️ React + TypeScript
- 💨 Tailwind CSS
- 🧠 Dummy Bot Logic
- 🔒 Authentication via localStorage
- 🎙️ Voice Input (Web Speech API)
- 📑 Prompt Templates

---

## 📦 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-handle>/zerocode-fe-assignment.git
   cd zerocode-fe-assignment
Install dependencies


npm install
Start the development server


npm run dev
Open in browser


📸 Screenshots

🔐 Login Page
![Login page](https://github.com/DarsiPushkar/DarsiPushkar-ZeroCode-fe-assignment/blob/main/Screenshot%20(9).png?raw=true)

📝 Register Page

💬 Chat Interface

🧱 Architecture Diagram

[ React Frontend (Vite + TypeScript) ]
        |
  ┌───────────────┐
  | LocalStorage  | <---- (users[], loggedInUser)
  └───────────────┘
        |
    [ Chat UI ]
    - Dummy bot replies
    - Prompt template
    - Voice input
✅ Features Checklist
 Register with email & password

 Login with existing credentials

 Session persists until logout

 Fully responsive UI

 Chat interface with dummy bot replies

 User messages aligned right, bot left

 Press Enter to send

 Auto-scroll to bottom

 Voice input support 🎤

 Prompt template dropdown

 Dark mode friendly

📜 License
This project is for educational use only. Developed as part of the ZeroCode FE Assignment.







