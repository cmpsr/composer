"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getButtonStateClassesFromType = void 0;

var _Button = require("../../components/primitives/Button");

const getButtonStateClassesFromType = type => {
  if (type === _Button.ButtonTypes.Primary) {
    return 'disabled:bg-fill-state-primary-disabled ' + 'disabled:pointer-events-none ' + 'active:bg-fill-state-primary-pressed ' + 'hover:bg-fill-state-primary-hover';
  } else if (type === _Button.ButtonTypes.Secondary) {
    return 'disabled:bg-fill-state-secondary-disabled ' + 'disabled:pointer-events-none ' + 'active:bg-fill-state-secondary-pressed ' + 'hover:bg-fill-state-secondary-hover';
  }
};

exports.getButtonStateClassesFromType = getButtonStateClassesFromType;