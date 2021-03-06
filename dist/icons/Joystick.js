"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Joystick = function Joystick(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M44 48c0-1.7-1.3-3-3-3h-6c-1.7 0-3 1.3-3 3h-5V21.6c4.6-1.3 8-5.5 8-10.6 0-6.1-4.9-11-11-11S13 4.9 13 11c0 5 3.4 9.3 8 10.6V48H0v16h48V48h-4z",
      fill: "#333"
    })
  );
};

exports.default = Joystick;