# DarsiPushkar-ZeroCode-fe-assignment
# 💬 ZeroCode Chatbot App

A simple, fully responsive chatbot web application built using **React**, **TypeScript**, and **Tailwind CSS**. This app includes user registration, login, authentication with localStorage, and a chat interface with dummy bot replies. Bonus features include **voice input** and **prompt templates**.

---

## 🚀 Live Demo

🔗 [https://your-deployed-url.vercel.app](https://your-deployed-url.vercel.app)

📧 **Test Credentials**  
- Email: `push@gmail.com`  
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

yaml
Copy
Edit

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

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm run dev
Open in browser
Visit: http://localhost:5173

📸 Screenshots
🔐 Login Page

📝 Register Page

💬 Chat Interface

🧱 Architecture Diagram
txt
Copy
Edit
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

yaml
Copy
Edit

---

### ✅ Final Steps

- Replace the deployed URL in the "Live Demo" section.
- Upload 3 screenshots (`login.png`, `register.png`, `chat.png`) inside a `screenshots/` folder in your repo.

Let me know if you'd like help generating the screenshots or deploying to Vercel!
