# testcafe-browser-provider-puppeteer
[![Build Status](https://travis-ci.org/jdobosz/testcafe-browser-provider-puppeteer.svg)](https://travis-ci.org/jdobosz/testcafe-browser-provider-puppeteer)

This is the **puppeteer** browser provider plugin for [TestCafe](http://devexpress.github.io/testcafe).

## Install

```
npm install testcafe-browser-provider-puppeteer
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

## Author
jdobosz 
