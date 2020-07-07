"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassesFromStyle = void 0;

const getClassesFromStyle = style => {
  return Object.keys(style || {}).reduce((prev, key) => {
    const keyString = key === "default" ? "" : `${key}:`;
    const val = Object.keys(style[key]).reduce((valPrev, valKey) => {
      return `${valPrev} ${keyString}${valKey}-${style[key][valKey]}`;
    }, "");
    return `${prev} ${val.trim()}`;
  }, "").trim();
};

exports.getClassesFromStyle = getClassesFromStyle;