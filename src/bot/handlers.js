// backend/src/bot/handlers.js
const { getUser } = require('../db/mock');
const { logEvent } = require('../utils/logger');

// Главное меню
function getMenuKeyboard() {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: "💰 Баланс", callback_data: 'balance' }],
        [{ text: "🎰 Слоты", callback_data: 'slots' }, { text: "🃏 Блекджек", callback_data: 'blackjack' }],
        [{ text: "⚙️ Меню", callback_data: 'menu' }]
      ]
    }
  };
}

// /start обработчик
function handleStart(bot, msg) {
  const chatId = msg.chat.id;
  logEvent(`/start by ${chatId}`);
  bot.sendMessage(chatId, `👋 Добро пожаловать в DepRocket Casino!\nВыберите действие:`, getMenuKeyboard());
}

// inline-кнопки
function handleMenu(bot, query) {
  const chatId = query.message.chat.id;
  const userId = query.from.id;
  if (query.data === 'balance') {
    const user = getUser(userId);
    bot.answerCallbackQuery({ callback_query_id: query.id });
    bot.sendMessage(chatId, `Ваш баланс: ${user.balance} 🪙`);
    logEvent(`Показан баланс пользователю ${userId}`);
  } else if (query.data === 'menu') {
    bot.answerCallbackQuery({ callback_query_id: query.id });
    bot.sendMessage(chatId, `Главное меню:`, getMenuKeyboard());
  }
  // сюда позже добавим слоты и блекджек
}

module.exports = { handleStart, handleMenu };
