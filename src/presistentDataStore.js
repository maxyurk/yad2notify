const fs = require('fs');

const path = '../db.json';

function readData() {
  try {
    return JSON.parse(fs.readFileSync(path));
  } catch (e) { // first time
    return {};
  }
}

function writeData(data) {
  fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = { readData, writeData };
