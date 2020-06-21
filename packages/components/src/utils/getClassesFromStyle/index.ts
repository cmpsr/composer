import { Style } from "types";

export const getClassesFromStyle = (style: Style) => {
  return Object.keys(style || {})
    .reduce((prev, key) => {
      const keyString = key === "default" ? "" : `${key}:`;
      const val = Object.keys(style[key]).reduce((valPrev, valKey) => {
        return `${valPrev} ${keyString}${valKey}-${style[key][valKey]}`;
      }, "");
      return `${prev} ${val.trim()}`;
    }, "")
    .trim();
};
