// File: src/pages/Chat.tsx
import { useEffect, useRef, useState } from "react";
import { logoutUser, getLoggedInUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [dark, setDark] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "This is a dummy bot reply." }]);
      setLoading(false);
    }, 1000);
  };

  const handleVoice = () => {
    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Browser doesn't support speech recognition");
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (e: any) => setInput(e.results[0][0].transcript);

    recognition.start();
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className={`h-screen flex flex-col ${dark ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow">
        <h2 className="font-bold">Hello, {getLoggedInUser()?.email}</h2>
        <div className="flex gap-4 items-center">
          <button onClick={() => setDark(!dark)} className="text-sm text-yellow-600 dark:text-yellow-400">
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button className="text-sm text-red-500" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div ref={chatRef} className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`p-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}>{msg.text}</div>
          </div>
        ))}
        {loading && <div className="text-sm italic text-gray-500">Bot is typing...</div>}
      </div>
      <div className="p-4 flex gap-2">
        <select onChange={(e) => setInput(e.target.value)} className="p-2 border">
          <option value="">Select prompt template</option>
          <option value="Hello, how can I help you?">Hello, how can I help you?</option>
          <option value="Tell me a joke">Tell me a joke</option>
        </select>
        <input
          className="flex-1 p-2 border"
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded">Send</button>
        <button onClick={handleVoice} className={`p-2 rounded ${listening ? "bg-green-500" : "bg-gray-500"}`}>🎤</button>
      </div>
    </div>
  );
}