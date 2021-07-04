/*
soo basically ei code ta amar(user) rokomari account e login kore wishlist e giye first jei book ache oitar name console e log korbe

(ami edge case gula handle korinai ;-;)*/



require('dotenv').config()
const puppeteer = require('puppeteer');
const password=process.env.ROKOMARI_PASSWORD;
const email=process.env.EMAIL;
(async () => {
    try {
      const browser = await puppeteer.launch({headless: false});
      const page = await browser.newPage();
      
      await page.goto("https://www.rokomari.com/book", {waitUntil: 'load', timeout:0});
      await page.click("#js--main-header > div > div > div.col-3 > div > div.dropdown.user-menu > a");
      await page.waitForSelector('#j_username');
      await page.type('#j_username', email);
      await page.type('#j_password', password);
      await page.evaluate( () => {
        window.scrollBy(0, 200);
      });
      await page.waitForSelector('#loginForm > button');
      await page.click('#loginForm > button');
      await page.waitForSelector('body > div.container-fluid.custom-container.home-page-main-div > section.floating-button > div.btn-wishlist');
      await page.click('body > div.container-fluid.custom-container.home-page-main-div > section.floating-button > div.btn-wishlist');
      await page.waitForSelector('#my-account > div.container > div > div.col-9 > main > section');
      let element = await page.$('#my-account > div.container > div > div.col-9 > main > section')
      let value = await page.$eval('#my-account > div.container > div > div.col-9 > main > section > div:nth-child(2) > div > div.my-account-book__meta > p.my-account-book__title.pt-1', node => node.innerText);
      console.log(value);
      console.log(":)");
    } catch (error) {
      console.log(error);
    }
    
  })();