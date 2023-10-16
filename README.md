# testcafe-browser-provider-puppeteer-launcher

Yet another [puppeteer](https://github.com/GoogleChrome/puppeteer)/chromium browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).
It allows to run tastcafe e2e tests headless in CI pipeline without any external dependency like xvfb, since everything what is needed is installed via npm.

## Install

```
npm install --save-dev testcafe-browser-provider-puppeteer-launcher
```

## Usage


When you run tests from the command line, use the provider name when specifying browsers:

```
testcafe puppeteer-launcher 'path/to/test/file.js'
```


When you use API, pass the provider name to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('puppeteer-launcher')
    .run();
```

## Device Emulation

If you want to emulate another device you can run `pupeteer:emulate=<Device name>`. The supported devices are listed in the [Puppeteer DeviceDescriptors](https://github.com/puppeteer/puppeteer/blob/master/lib/DeviceDescriptors.js).

## Troubleshooting

On same older linux distributions, fails chromium due to sandbox issues - see [this](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-fails-due-to-sandbox-issues).

You can try in such case running the plugin without sandbox restriction

 ```
testcafe puppeteer-launcher:no_sandbox 'path/to/test/file.js'

```

In order to speedup CI you can provide custom executable of chromium browser instead to download it all the time:

```
runner
  .browsers(['puppeteer-launcher:no_sandbox?/usr/bin/chromium-browser'])


runner
  .browsers(['puppeteer-launcher:?/usr/bin/chromium-browser'])

```

## Publish

```sh
npm ci && npm run build
npm version 1.x.x
```
Use gcloud identification for npm publication by running this command
and copy the output to your ~/.npmrc
```sh
gcloud artifacts print-settings npm --project=bcm-energy-production --scope=@elmy --repository="node-libs" --location="europe"
```
Then run:
```sh
npm run artifactregistry-login
```

Then publish
```sh
npm publish
```

## Author
Jacek Dobosz

## Contributors
Lukasz Szmit

Pedro Scaff

Bhavdeep Dhanjal
