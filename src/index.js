import puppeteer from 'puppeteer';

export default {
    // Multiple browsers support
    isMultiBrowser: true,

    browser: null,

    openedPages: {},


    // Required - must be implemented
    // Browser control
    async openBrowser(id, pageUrl, browserName) {

        if (!this.browser) {
            let puppeteerArgs = [];

            if (browserName === "no_sandbox") {
                console.log('Using puppeteer without sandbox!');
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

    async closeBrowser(id) {
        const page = this.openedPages[id];

        delete this.openedPages[id];
        await page.close();
    },


    async isValidBrowserName() {
        return true;
    },

    // Extra methods
    async resizeWindow(/* id, width, height, currentWidth, currentHeight */) {
        this.reportWarning('The window resize functionality is not supported by the "puppeteer" browser provider.');
    },

    async takeScreenshot(/* id, screenshotPath, pageWidth, pageHeight */) {
        this.reportWarning('The screenshot functionality is not supported by the "puppeteer" browser provider.');
    }
};
