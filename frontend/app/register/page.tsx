"use client";
import { useState } from "react";
import { api } from "../../lib/api";

export default function Register() {
  const [form, setForm] = useState<any>({});

  const register = async () => {
    await api("/auth/register", {
      method: "POST",
      body: JSON.stringify(form)
    });
    alert("Registered");
  };

  return (
    <div className="p-10">
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} className="border p-2 block mb-3" />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} className="border p-2 block mb-3" />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} className="border p-2 block mb-3" />
      <button onClick={register} className="bg-black text-white px-4 py-2">Register</button>
    </div>
  );
}
