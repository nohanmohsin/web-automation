require('dotenv').config()
const puppeteer = require('puppeteer');
const searchKeyword = 'keyboard';

(async () => {
    try {
      const browser = await puppeteer.launch({headless: false});
      const page = await browser.newPage();
      await page.goto('https://www.startech.com.bd/', {waitUntil: 'load', timeout:0})
      await page.type('#search > div.input-group > input[type=text]', searchKeyword)
      await page.click('#search > div.input-group > button')
    } catch (error) {
      console.log(error);
    }
    
})();