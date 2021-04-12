require('dotenv').config()
const puppeteer = require('puppeteer');
const searchKeyword = 'keyboard';

(async () => {
    try {
      const browser = await puppeteer.launch({headless: false});
      const page = await browser.newPage();
      await page.setViewport({
        width: 1280,
        height: 720
      })
      await page.goto('https://www.startech.com.bd/', {waitUntil: 'load', timeout:0})
      await page.type('#search > div.input-group > input[type=text]', searchKeyword)
      await page.click('#search > div.input-group > button')
      await page.waitForSelector('#content > div.search-products.margin-top.product-listing.m-t-15 > div.row > div:nth-child(1) > div > div.product-info > div.actions > div.price > span:nth-child(1)')
      
      let priceEl= await page.$x('//*[@id="content"]/div[2]/div[2]/div[1]/div/div[2]/div[2]/div[1]/span[1]')
      let realPrice=await page.evaluate(el => el.textContent, priceEl[0])
      console.log(realPrice)
    } catch (error) {
      console.log(error);
    }
    
})();