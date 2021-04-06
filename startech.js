const pup = require('puppeteer');
(async () => {
    try{
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()

    }
    catch (error) {
        console.log(error);
    }
})