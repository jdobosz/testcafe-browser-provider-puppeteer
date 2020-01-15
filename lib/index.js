"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _default = {
  // Multiple browsers support
  isMultiBrowser: true,
  browser: null,
  openedPages: {},
  // Required - must be implemented
  // Browser control
  openBrowser: function () {
    var _openBrowser = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(id, pageUrl, browserName) {
      var browserArgs, launchArgs, noSandboxArgs, userArgs, params, executablePath, page, emulationArg, _emulationArg$split, _emulationArg$split2, emulationDevice, device;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              browserArgs = browserName.split(':');

              if (this.browser) {
                _context.next = 8;
                break;
              }

              launchArgs = {
                timeout: 10000
              };
              noSandboxArgs = ['--no-sandbox', '--disable-setuid-sandbox'];
              if (browserArgs.indexOf('no_sandbox') !== -1) launchArgs.args = noSandboxArgs;else if (browserName.indexOf('?') !== -1) {
                userArgs = browserName.split('?');
                params = userArgs[0];
                if (params === 'no_sandbox') launchArgs.args = noSandboxArgs;
                executablePath = userArgs[1];
                if (executablePath.length > 0) launchArgs.executablePath = executablePath;
              }
              _context.next = 7;
              return _puppeteer.default.launch(launchArgs);

            case 7:
              this.browser = _context.sent;

            case 8:
              _context.next = 10;
              return this.browser.newPage();

            case 10:
              page = _context.sent;
              emulationArg = browserArgs.find(function (v) {
                return /^emulate/.test(v);
              });

              if (!Boolean(emulationArg)) {
                _context.next = 19;
                break;
              }

              _emulationArg$split = emulationArg.split('='), _emulationArg$split2 = (0, _slicedToArray2.default)(_emulationArg$split, 2), emulationDevice = _emulationArg$split2[1];
              device = _puppeteer.default.devices[emulationDevice];

              if (device) {
                _context.next = 17;
                break;
              }

              throw new Error('Emulation device is not supported');

            case 17:
              _context.next = 19;
              return page.emulate(device);

            case 19:
              _context.next = 21;
              return page.goto(pageUrl);

            case 21:
              this.openedPages[id] = page;

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function openBrowser(_x, _x2, _x3) {
      return _openBrowser.apply(this, arguments);
    }

    return openBrowser;
  }(),
  closeBrowser: function () {
    var _closeBrowser = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(id) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              delete this.openedPages[id];
              _context2.next = 3;
              return this.browser.close();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function closeBrowser(_x4) {
      return _closeBrowser.apply(this, arguments);
    }

    return closeBrowser;
  }(),
  isValidBrowserName: function () {
    var _isValidBrowserName = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3() {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", true);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function isValidBrowserName() {
      return _isValidBrowserName.apply(this, arguments);
    }

    return isValidBrowserName;
  }(),
  // Extra methods
  resizeWindow: function () {
    var _resizeWindow = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(id, width, height) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.openedPages[id].setViewport({
                width: width,
                height: height
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function resizeWindow(_x5, _x6, _x7) {
      return _resizeWindow.apply(this, arguments);
    }

    return resizeWindow;
  }(),
  takeScreenshot: function () {
    var _takeScreenshot = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(id, screenshotPath) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.openedPages[id].screenshot({
                path: screenshotPath
              });

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function takeScreenshot(_x8, _x9) {
      return _takeScreenshot.apply(this, arguments);
    }

    return takeScreenshot;
  }()
};
exports.default = _default;
module.exports = exports.default;