"use client";
import React from "react";

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

// Если тебе нужна функция getBalance, вынеси её в отдельный файл!
// Например, создай файл `app/utils/getBalance.ts` и вставь туда:
export async function getBalance() {
  const res = await fetch("http://localhost:3001/balance");
  if (!res.ok) throw new Error("Ошибка при получении баланса");
  return res.json();
}
