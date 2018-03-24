const { scrape } = require('../src/yad2scraper');
const { url } = require('../config');
const { writeData, readData } = require('../src/presistentDataStore');


console.log('\nyad2notify starting\n');

const oldData = readData();
const newData = scrape({ url });
console.log(oldData === newData);
// todo diff data & send notification
writeData(newData);

console.log('\nyad2notify stopping\n');
