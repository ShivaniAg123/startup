"use client";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";

export default function Dashboard() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    api("/claims/my", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(setClaims);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">My Claimed Deals</h1>

      {claims.map((c: any) => (
        <div key={c._id} className="border p-4 mb-3 rounded">
          <h2>{c.dealId.title}</h2>
          <p>Status: {c.status}</p>
        </div>
      ))}
    </div>
  );
}
