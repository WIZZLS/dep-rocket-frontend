'use client';

import React from "react";

type BalanceProps = {
  amount: number;
};

export const Balance: React.FC<BalanceProps> = ({ amount }) => (
  <div className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg mb-6 text-center">
    <span>💰 Баланс: </span>
    <span className="font-bold text-xl">{amount}₽</span>
  </div>
);

export default Balance;
type BalanceProps = {
  amount: number;
};

export default function Balance({ amount }: BalanceProps) {
  return (
    <div className="mb-6 text-xl font-semibold">
      Баланс: <span className="text-green-400">{amount}₽</span>
    </div>
  );
}
// /app/api/getBalance.ts (или в components/utils)
export async function getBalance() {
  const res = await fetch("http://localhost:3001/balance"); // <-- порт и url своего backend!
  if (!res.ok) throw new Error("Ошибка при получении баланса");
  return res.json();
}
