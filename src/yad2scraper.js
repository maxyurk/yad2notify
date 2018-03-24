const puppeteer = require('puppeteer');

async function scrape({ url }) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log('loading page\n');
  await page.goto(url).catch(console.log);
  console.log('taking a quick nap\n');
  await (new Promise(res => setTimeout(res, 10000)));
  console.log('extracting data\n');
  const data = await page.evaluate(() =>
    // eslint-disable-next-line no-undef
    Array.from(document.getElementsByClassName('showPopupUnder')).filter(x => x.id.startsWith('tr_')).map(x => ([x.id, x.outerText])));
  await browser.close();
  // console.log('data: ', data, '\n');
  return data;
}

module.exports = { scrape };
