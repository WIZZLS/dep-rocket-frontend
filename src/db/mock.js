// backend/src/db/mock.js

const users = {}; // userId: { balance: number, ... }

module.exports = {
  getUser(id) {
    if (!users[id]) users[id] = { balance: 1000 };
    return users[id];
  },
  updateUser(id, data) {
    users[id] = { ...this.getUser(id), ...data };
  },
  allUsers() {
    return users;
  }
};
