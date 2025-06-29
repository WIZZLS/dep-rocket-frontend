// backend/src/utils/logger.js
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../../log.txt');

function logEvent(message) {
  const time = new Date().toISOString();
  fs.appendFileSync(logFile, `[${time}] EVENT: ${message}\n`);
}

function logError(error) {
  const time = new Date().toISOString();
  fs.appendFileSync(logFile, `[${time}] ERROR: ${error}\n`);
}

module.exports = { logEvent, logError };
