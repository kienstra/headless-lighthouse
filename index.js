const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const {URL} = require('url');

(async() => {
  const url = process.argv.slice(2);

  const browser = await puppeteer.launch({
    defaultViewport: null,
  })

  const {lhr} = await lighthouse(url, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'json',
    logLevel: 'info',
  })

  console.log(`Lighthouse scores: ${Object.values(lhr.categories).map(c => c.score).join(', ')}`)
  console.log(`The performance score is: ${lhr.categories.performance.score}`)

  await browser.close();
})();
