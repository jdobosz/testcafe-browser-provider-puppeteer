import puppeteer from 'puppeteer';

export default {
    // Multiple browsers support
    isMultiBrowser: true,

    browser: null,

    openedPages: {},


    // Required - must be implemented
    // Browser control
    async openBrowser (id, pageUrl, browserName) {

        if (!this.browser) {
            let puppeteerArgs = [];

            if (browserName === 'no_sandbox') {
                puppeteerArgs = [
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ];
            }
            this.browser = await puppeteer.launch({
                timeout: 10000,
                args: puppeteerArgs
            });

        }

        const page = await this.browser.newPage();

        await page.goto(pageUrl);
        this.openedPages[id] = page;
    },

    async closeBrowser (id) {
        delete this.openedPages[id];
        await this.browser.close();
    },


    async isValidBrowserName () {
        return true;
    },

    // Extra methods
    async resizeWindow (id, width, height) {
        await this.openedPages[id].setViewport({ width, height });
    },

    async takeScreenshot (id, screenshotPath) {
        await this.openedPages[id].screenshot({ path: screenshotPath });
    }
};
