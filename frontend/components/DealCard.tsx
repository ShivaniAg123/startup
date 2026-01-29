"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DealCard({ deal }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border p-5 rounded shadow"
    >
      <h2 className="font-semibold">{deal.title}</h2>
      <p className="text-sm text-gray-500">{deal.partnerName}</p>

      {deal.isLocked && (
        <span className="text-red-500 text-sm">🔒 Locked</span>
      )}

      <Link
        href={`/deals/${deal._id}`}
        className="block mt-4 text-blue-600"
      >
        View Details
      </Link>
    </motion.div>
  );
}
