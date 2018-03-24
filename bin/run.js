const { scrape } = require('../src/yad2scraper');
const { url } = require('../config');
const { writeData, readData } = require('../src/presistentDataStore');
const { pushToAll } = require('../src/notification');

console.log('\nyad2notify starting\n');
const oldData = readData();

async function mainLoop() {
  const newData = await scrape({ url });
  let res = '';
  Object.keys(newData).forEach((x) => {
    if (!oldData[x]) {
      res = `${res + newData[x]}\n`;
      oldData[x] = newData[x];
    }
  });
  if (res !== '') {
    pushToAll('מודעות חדשות ביד שתיים', res);
    console.log('notification sent:', res);
    writeData(oldData);
  }
  console.log('taking a long nap\n');
}

setInterval(() => mainLoop(), 600 * 1000);
