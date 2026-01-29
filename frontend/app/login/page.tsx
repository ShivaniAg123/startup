"use client";
import { useState } from "react";
import { api } from "../../lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await api("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    localStorage.setItem("token", res.token);
    alert("Logged in");
  };

  return (
    <div className="p-10">
      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        className="border p-2 block mb-3"
      />
      <input
        placeholder="Password"
        type="password"
        onChange={e => setPassword(e.target.value)}
        className="border p-2 block mb-3"
      />
      <button onClick={login} className="bg-black text-white px-4 py-2">
        Login
      </button>
    </div>
  );
}
