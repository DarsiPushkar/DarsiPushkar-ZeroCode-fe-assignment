import { useState } from "react";
import { loginUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginUser(email, password);
    if (!result.success) {
      setError(result.message || "Login failed");
    } else {
      navigate("/chat");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-2 border" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full p-2 mb-2 border" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button className="w-full bg-green-500 text-white p-2 rounded">Login</button>
        <p className="mt-2 text-sm">New user? <a href="/register" className="text-blue-500">Register</a></p>
      </form>
    </div>
  );
}