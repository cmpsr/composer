"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomTrafficSelector = void 0;

const randomTrafficSelector = (items, transformer) => {
  const randomValue = Math.random();
  let previous = 0;

  for (let index = 0; index < items.length; index++) {
    const item = items[index];

    if (randomValue >= previous && randomValue < previous + item.traffic) {
      return transformer(item);
    }

    previous += item.traffic;
  } // This point should never be reached, just a safe guard


  return transformer(items[items.length - 1]);
};

exports.randomTrafficSelector = randomTrafficSelector;