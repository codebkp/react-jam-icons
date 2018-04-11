"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Map = function Map(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 61 56" }, props),
    _react2.default.createElement("path", {
      d: "M60.1.4L40.5 7.8 20.9.4c-.2-.1-.3-.1-.4-.1-.1 0-.3 0-.4.1L.9 7.6C.4 7.8 0 8.4 0 9v46c0 .6.4.8.9.6l19.6-7.4 19.6 7.4c.2.1.3.1.4.1.1 0 .3 0 .4-.1L60 48.3c.5-.2.9-.8.9-1.4V1c.1-.6-.3-.8-.8-.6zM23 5.4l15 5.7v39.4l-15-5.7V5.4zM4 10.7L19 5v39.4L4 50.2V10.7zm53 34.6L42 51V11.5l15-5.7v39.5z",
      fill: "#333"
    })
  );
};

exports.default = Map;