const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const {URL} = require('url');

/**
 * Gets a performance score for a given screen.
 *
 * @param {string} screen Either 'desktop' or 'mobile'.
 * @return {number} The performance score.
 */
async function getPerformanceScore(screen) {
  const url = process.argv.slice(2);
  const browser = await puppeteer.launch({
    defaultViewport: null,
  })

  const {lhr} = await lighthouse(url, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'json',
    onlyCategories: ['performance'],
    formFactor: screen,
    screenEmulation: {mobile: screen === 'mobile'},
    preset: screen === 'desktop' ? 'desktop' : undefined,
  })

  await browser.close()
  return lhr.categories.performance.score
}

/**
 * Runs Lighthouse performance reports for a given screen type.
 *
 * @param {string} screen Either 'desktop' or 'mobile'.
 */
async function runReports(screen) {
  const results = []
  const numberOfTrials = 10
  for (let i = 1; i <= numberOfTrials; i++) {
    const score = await getPerformanceScore(screen)
    results.push(score)
    console.log(`Trial ${i} for ${screen}: ${score}`)
  }

  const mean = results.reduce((a, b) => (a + b)) / results.length;
  console.log(`\nThe mean performance score for ${screen} was: ${mean} \n`)
}

(async () => {
  console.log('Getting Lighthouse performance scores for mobile and desktop… \n')
  await runReports('mobile')
  await runReports('desktop')
})()
