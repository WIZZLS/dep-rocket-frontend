// backend/src/api/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { logEvent } = require('../utils/logger');
const adminRoutes = require('./admin');

app.use(cors());
app.use(express.json());

// Пример публичного API
app.get('/api/ping', (req, res) => {
  logEvent('API ping');
  res.json({ ok: true, status: "DepRocket backend working!" });
});

app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => logEvent(`API сервер запущен на порту ${PORT}`));
