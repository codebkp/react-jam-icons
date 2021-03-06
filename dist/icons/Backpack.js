"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Backpack = function Backpack(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 42 64" }, props),
    _react2.default.createElement("path", {
      d: "M40 20V5c0-2.8-2.2-5-5-5s-5 2.2-5 5v5c-2.7-1.3-5.8-2-9-2s-6.3.7-9 2V5c0-2.8-2.2-5-5-5S2 2.2 2 5v15c-1.3 2.7-2 5.8-2 9v31c0 2.2 1.8 4 4 4h34c2.2 0 4-1.8 4-4V29c0-3.2-.7-6.3-2-9zM33 5c0-1.1.9-2 2-2s2 .9 2 2v10.4c-1.2-1.4-2.5-2.6-4-3.6V5zM5 5c0-1.1.9-2 2-2s2 .9 2 2v6.8c-1.5 1-2.8 2.3-4 3.6V5zm34 55c0 .6-.4 1-1 1H4c-.6 0-1-.5-1-1v-2h36v2zm0-5H3V29c0-5.4 2.4-10.3 6.2-13.6l.9-.7.6-.4.9-.6c2.7-1.7 6-2.7 9.4-2.7 3.5 0 6.7 1 9.5 2.7l.9.6.6.5.8.6C36.6 18.7 39 23.5 39 29v26zM21 14c-8.3 0-15 6.7-15 15h3c0-6.6 5.4-12 12-12s12 5.4 12 12h3c0-8.3-6.7-15-15-15zm12 19.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V31h-3v2.5zM32 37H10c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4zm1 11c0 .6-.4 1-1 1H10c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v7z",
      fill: "#343434"
    })
  );
};

exports.default = Backpack;