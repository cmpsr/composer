"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getButtonStateClassesFromType = void 0;

var _Button = require("../../components/primitives/Button");

const getButtonStateClassesFromType = type => {
  if (type === _Button.ButtonTypes.Primary) {
    return 'disabled:bg-states-contained-disabled ' + 'disabled:pointer-events-none ' + 'active:bg-states-contained-pressed ' + 'hover:bg-states-contained-hover';
  } else if (type === _Button.ButtonTypes.Secondary) {
    return 'disabled:bg-states-outlined-disabled ' + 'disabled:pointer-events-none ' + 'active:bg-states-outlined-pressed ' + 'hover:bg-states-outlined-hover';
  }
};

exports.getButtonStateClassesFromType = getButtonStateClassesFromType;