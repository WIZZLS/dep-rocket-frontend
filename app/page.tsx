"use client";
import { useEffect, useState } from "react";
import Balance from "./components/Balance"; // путь поправь, если не работает
import { getBalance } from "./getBalance";   // путь тоже проверь
import { getBalance } from "./utils/getBalance";


declare global {
  interface Window {
    Telegram: {
      WebApp: {
        expand: () => void;
        // можно добавить ещё методы, если есть
      };
    };
  }
}

export default function Home() {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    getBalance()
      .then((data) => setBalance(data.balance))
      .catch(() => setBalance(0));
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <>
      <Balance amount={balance ?? 0} />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-300">DepRocket Casino</h1>
        <p>Добро пожаловать в Telegram-казино мини-приложение!</p>
        {/* Тут кнопки и прочий интерфейс */}
      </main>
    </>
  );
}
