require('dotenv').config()
const puppeteer = require('puppeteer');
const password = process.env.PASSWORD;
(async () => {
  try {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://github.com/login", {waitUntil: 'load', timeout:0});
    await page.type('#login_field', 'nohanmohsin');
    await page.type('#password', password);
    await page.click('[type="submit"]');
    await page.waitForNavigation();
    await page.click('[aria-label="Create new…"]');
    await page.click('[href="/new"]');
    await page.waitForTimeout(2000);
    await page.click('#repository_name');
    await page.type('#repository_name', 'web generated');
    await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
    await page.waitForTimeout(2000);
    await page.evaluate(()=>document.querySelector('[type="submit"]').click());
    console.log(":)"); 
  } catch (error) {
    console.log(error);
  }
  
})();