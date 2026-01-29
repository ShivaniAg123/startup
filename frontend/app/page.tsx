"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-5xl font-bold">Exclusive SaaS Deals</h1>
      <p className="mt-4 text-gray-500">
        Helping startups save money on tools they love
      </p>

      <Link
        href="/deals"
        className="mt-8 px-6 py-3 bg-black text-white rounded"
      >
        Explore Deals
      </Link>
    </motion.div>
  );
}
