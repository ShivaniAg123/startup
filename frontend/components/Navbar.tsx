"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-4 border-b">
      <h1 className="font-bold">StartupBenefits</h1>
      <div className="space-x-4">
        <Link href="/deals">Deals</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
