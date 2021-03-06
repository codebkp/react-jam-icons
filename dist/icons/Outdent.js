"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Outdent = function Outdent(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 48" }, props),
    _react2.default.createElement("path", {
      d: "M3 6h58c1.7 0 3-1.3 3-3s-1.3-3-3-3H3C1.3 0 0 1.3 0 3s1.3 3 3 3zm58 22H27c-1.7 0-3 1.3-3 3s1.3 3 3 3h34c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-14H27c-1.7 0-3 1.3-3 3s1.3 3 3 3h34c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0 28H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3zM14.6 10.2L.8 23.2c-.4.4-.4 1 0 1.4l13.8 13c.8.8 1.5.5 1.5-.6V10.8c-.1-1.1-.7-1.4-1.5-.6z",
      fill: "#333"
    })
  );
};

exports.default = Outdent;