import puppeteer from "puppeteer";

export default {
    // Multiple browsers support
    isMultiBrowser: true,

    browser: null,
    userAgent: null,

    openedPages: {},

    // Required - must be implemented
    // Browser control
    async openBrowser(id, pageUrl, browserName) {
        const browserArgs = browserName.split(":");
        if (!this.browser) {
            const launchArgs = {
                timeout: 10000,
            };

            const noSandboxArgs = ["--no-sandbox", "--disable-setuid-sandbox"];

            if (browserArgs.indexOf("no_sandbox") !== -1)
                launchArgs.args = noSandboxArgs;
            else if (browserName.indexOf("?") !== -1) {
                const userArgs = browserName.split("?");
                const params = userArgs[0];

                if (params === "no_sandbox") launchArgs.args = noSandboxArgs;

                const executablePath = userArgs[1];

                if (executablePath.length > 0)
                    launchArgs.executablePath = executablePath;
            }

            this.userAgent = parseUserAgentFromArgs(browserArgs);

            this.browser = await puppeteer.launch(launchArgs);
        }

        const page = await this.browser.newPage();

        if (this.userAgent) {
            await page.setUserAgent(this.userAgent);
        }

        const emulationArg = browserArgs.find((v) => /^emulate/.test(v));

        if (Boolean(emulationArg)) {
            const [, emulationDevice] = emulationArg.split("=");
            const device = puppeteer.devices[emulationDevice];

            if (!device) throw new Error("Emulation device is not supported");

            await page.emulate(device);
        }

        await page.goto(pageUrl);
        this.openedPages[id] = page;
    },

    async closeBrowser(id) {
        delete this.openedPages[id];
        await this.browser.close();
    },

    async isValidBrowserName() {
        return true;
    },

    // Extra methods
    async resizeWindow(id, width, height) {
        await this.openedPages[id].setViewport({ width, height });
    },

    async takeScreenshot(id, screenshotPath) {
        await this.openedPages[id].screenshot({ path: screenshotPath });
    },
};

function parseUserAgentFromArgs(browserArgs = []) {
    const uaIdx = browserArgs.findIndex((x) => x.includes("user_agent="));
    if (uaIdx !== -1) {
        const matches = browserArgs[uaIdx].match(
            /user_agent=[\"\']?(.*)[\"\']?/i
        );

        if (matches.length > 1) {
            return matches[1];
        }
    }

    return null;
}
