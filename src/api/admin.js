// backend/src/api/admin.js
const express = require('express');
const router = express.Router();
const { allUsers } = require('../db/mock');

router.get('/users', (req, res) => {
  res.json(allUsers());
});

module.exports = router;
