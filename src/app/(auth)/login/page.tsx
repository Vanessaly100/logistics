'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import api from "../../../lib/axios";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const role = res.data.role;

      // Redirect based on role
      if (role === "admin") router.push("/admin");
      else router.push("/user");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="border p-2 w-full my-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="border p-2 w-full my-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-black text-white p-2 rounded w-full">
        Login
      </button>
    </div>
  );
}
