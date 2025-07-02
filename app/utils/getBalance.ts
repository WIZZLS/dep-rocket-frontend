export async function getBalance() {
  const res = await fetch("http://localhost:3001/balance");
  if (!res.ok) throw new Error("Ошибка при получении баланса");
  return res.json();
}
