const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const {URL} = require('url');

async function runLighthouse() {
  const url = process.argv.slice(2);
  const browser = await puppeteer.launch({
    defaultViewport: null,
  })

  const {lhr} = await lighthouse(url, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'json',
  })

  await browser.close();
  return lhr.categories.performance.score
}

(async () => {
  const results = []
  const numberOfTrials = 10
  for (let i = 1; i <= numberOfTrials; i++) {
    const score = await runLighthouse()
    results.push(score)
    console.log(`The performance score of trial ${i} is: ${score}`)
  }

  const mean = results.reduce((a, b) => (a + b)) / results.length;
  console.log(`\nThe mean performance score was: ${mean}`)
})()
