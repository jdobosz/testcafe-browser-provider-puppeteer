# testcafe-browser-provider-puppeteer
[![Build Status](https://travis-ci.org/jdobosz/testcafe-browser-provider-puppeteer.svg)](https://travis-ci.org/jdobosz/testcafe-browser-provider-puppeteer)

This is the [puppeteer](https://github.com/GoogleChrome/puppeteer) browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).

## Install

```
npm install --save-dev testcafe-browser-provider-puppeteer
```

## Usage


When you run tests from the command line, use the provider name when specifying browsers:

```
testcafe puppeteer 'path/to/test/file.js'
```


When you use API, pass the provider name to the `browsers()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('puppeteer')
    .run();
```

## Troubleshooting

On same older linux distributions, fails chromium due to sandbox issues - see [this](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-fails-due-to-sandbox-issues).

You can try in such case the branch [no_sandbox](https://github.com/jdobosz/testcafe-browser-provider-puppeteer/tree/no_sandbox) directly in package.json:

 ```
 ....
    "testcafe-browser-provider-puppeteer": "git+https://github.com/jdobosz/testcafe-browser-provider-puppeteer.git#no_sandbox"
    ....
```

## Author
Jacek Dobosz
