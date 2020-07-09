"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFastlyABAllocationsFromHeader = void 0;

const getFastlyABAllocationsFromHeader = header => {
  const base64Tests = Buffer.from(header, 'base64').toString('utf8');
  return JSON.parse(base64Tests);
};

exports.getFastlyABAllocationsFromHeader = getFastlyABAllocationsFromHeader;