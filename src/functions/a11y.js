const { loadPage } = require('axe-puppeteer');
const puppeteer = require('puppeteer');

exports.handler = async (event, context, callback) => {
  const url = 'https://alexclapperton.co.uk';
  const browser = await puppeteer.launch()
  const axeBuilder = await loadPage(browser, url);
  const results = await axeBuilder.withTags('wcag2a').analyze();

  await browser.close();

  return callback(null, {
    body: JSON.stringify(results),
    statusCode: 200,
  });
}
