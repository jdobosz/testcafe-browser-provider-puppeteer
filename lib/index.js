"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _puppeteer = _interopRequireWildcard(require("puppeteer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  // Multiple browsers support
  isMultiBrowser: true,
  browser: null,
  openedPages: {},
  // Required - must be implemented
  // Browser control
  openBrowser: function openBrowser(id, pageUrl, browserName) {
    var _this = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var browserArgs, launchArgs, noSandboxArgs, userArgs, params, executablePath, page, emulationArg, _emulationArg$split, _emulationArg$split2, emulationDevice, device;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              browserArgs = browserName.split(':');

              if (_this.browser) {
                _context.next = 8;
                break;
              }

              launchArgs = {
                timeout: 10000,
                headless: 'new'
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
              return _puppeteer["default"].launch(launchArgs);

            case 7:
              _this.browser = _context.sent;

            case 8:
              _context.next = 10;
              return _this.browser.newPage();

            case 10:
              page = _context.sent;
              emulationArg = browserArgs.find(function (v) {
                return /^emulate/.test(v);
              });

              if (!emulationArg) {
                _context.next = 19;
                break;
              }

              _emulationArg$split = emulationArg.split('='), _emulationArg$split2 = (0, _slicedToArray2["default"])(_emulationArg$split, 2), emulationDevice = _emulationArg$split2[1];
              device = _puppeteer.KnownDevices[emulationDevice];

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
              return page["goto"](pageUrl);

            case 21:
              _this.openedPages[id] = page;

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  closeBrowser: function closeBrowser(id) {
    var _this2 = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              delete _this2.openedPages[id];
              _context2.next = 3;
              return _this2.browser.close();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  isValidBrowserName: function isValidBrowserName() {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
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
    }))();
  },
  // Extra methods
  resizeWindow: function resizeWindow(id, width, height) {
    var _this3 = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this3.openedPages[id].setViewport({
                width: width,
                height: height
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  takeScreenshot: function takeScreenshot(id, screenshotPath) {
    var _this4 = this;

    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this4.openedPages[id].screenshot({
                path: screenshotPath
              });

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
};
exports["default"] = _default;
module.exports = exports.default;