const { chromium } = require('playwright');
(async () => {
    
    try{

        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.daraz.com.bd/');
        await page.fill('#q', 'among us')
        await page.keyboard.press('Enter');
        await page.waitForSelector('#root > div > div.ant-row.c10-Cg > div.ant-col-24 > div > div.ant-col-20.ant-col-push-4.c1z9Ut > div.c1_t2i > div:nth-child(1)')
        await page.waitForTimeout(2000);
        const productHandle = await page.$('[data-qa-locator="general-products"]')
        let value= await productHandle.$eval('div:nth-child(1)', nodes => {
            return nodes
        })
        console.log(value);
    }
    catch(error){
        console.log(error)
    }
})();
