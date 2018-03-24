const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'db.json');

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify({}));
}

function readData() {
  return JSON.parse(fs.readFileSync(dbPath));
}

function writeData(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data));
}

module.exports = { readData, writeData };
