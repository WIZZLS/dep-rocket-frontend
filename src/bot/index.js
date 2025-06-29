// backend/src/bot/index.js
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { handleStart, handleMenu } = require('./handlers');
const { logEvent, logError } = require('../utils/logger');

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => handleStart(bot, msg));
bot.on('callback_query', (query) => handleMenu(bot, query));

bot.on('polling_error', (error) => logError(error.message));
logEvent('Bot started');

module.exports = bot;
