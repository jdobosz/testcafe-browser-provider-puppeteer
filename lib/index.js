'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    // Multiple browsers support
    isMultiBrowser: true,

    browser: null,

    openedPages: {},

    // Required - must be implemented
    // Browser control
    openBrowser: function openBrowser(id, pageUrl, browserName) {
        var _this = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var launchArgs, noSandboxArgs, userArgs, params, executablePath, page;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (_this.browser) {
                                _context.next = 7;
                                break;
                            }

                            launchArgs = {
                                timeout: 10000
                            };
                            noSandboxArgs = ['--no-sandbox', '--disable-setuid-sandbox'];


                            if (browserName === 'no_sandbox') launchArgs.args = noSandboxArgs;else if (browserName.indexOf('?') !== -1) {
                                userArgs = browserName.split('?');
                                params = userArgs[0];


                                if (params === 'no_sandbox') launchArgs.args = noSandboxArgs;

                                executablePath = userArgs[1];


                                if (executablePath.length > 0) launchArgs.executablePath = executablePath;
                            }
                            _context.next = 6;
                            return _puppeteer2.default.launch(launchArgs);

                        case 6:
                            _this.browser = _context.sent;

                        case 7:
                            _context.next = 9;
                            return _this.browser.newPage();

                        case 9:
                            page = _context.sent;
                            _context.next = 12;
                            return page.goto(pageUrl);

                        case 12:
                            _this.openedPages[id] = page;

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },
    closeBrowser: function closeBrowser(id) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            delete _this2.openedPages[id];
                            _context2.next = 3;
                            return _this2.browser.close();

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }))();
    },
    isValidBrowserName: function isValidBrowserName() {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt('return', true);

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this3);
        }))();
    },


    // Extra methods
    resizeWindow: function resizeWindow(id, width, height) {
        var _this4 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _this4.openedPages[id].setViewport({ width: width, height: height });

                        case 2:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this4);
        }))();
    },
    takeScreenshot: function takeScreenshot(id, screenshotPath) {
        var _this5 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return _this5.openedPages[id].screenshot({ path: screenshotPath });

                        case 2:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, _this5);
        }))();
    }
};
module.exports = exports['default'];