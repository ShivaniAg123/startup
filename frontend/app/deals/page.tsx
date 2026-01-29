"use client";
import { useEffect, useState } from "react";
import DealCard from "../../components/DealCard";
import { api } from "../../lib/api";

export default function DealsPage() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    api("/deals").then(setDeals);
  }, []);

  return (
    <div className="p-10 grid grid-cols-3 gap-6">
      {deals.map((deal: any) => (
        <DealCard key={deal._id} deal={deal} />
      ))}
    </div>
  );
}
