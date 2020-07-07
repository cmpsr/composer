"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = exports.TargetOption = exports.LinkTypes = exports.LINK_DEFAULT_TEST_ID = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LINK_DEFAULT_TEST_ID = 'link';
exports.LINK_DEFAULT_TEST_ID = LINK_DEFAULT_TEST_ID;
let LinkTypes;
exports.LinkTypes = LinkTypes;

(function (LinkTypes) {
  LinkTypes["Image"] = "flex justify-center";
  LinkTypes["Text"] = "text-btn";
  LinkTypes["Primary"] = "primary-btn";
  LinkTypes["Secondary"] = "secondary-btn";
})(LinkTypes || (exports.LinkTypes = LinkTypes = {}));

let TargetOption;
exports.TargetOption = TargetOption;

(function (TargetOption) {
  TargetOption["Blank"] = "_blank";
  TargetOption["Parent"] = "_parent";
  TargetOption["Top"] = "_top";
  TargetOption["Framename"] = "framename";
})(TargetOption || (exports.TargetOption = TargetOption = {}));

const Link = ({
  children,
  className,
  route,
  type = LinkTypes.Text,
  url,
  testId = LINK_DEFAULT_TEST_ID,
  target
}) => {
  return /*#__PURE__*/_react.default.createElement("a", {
    target: target,
    href: route ? route.slug : url,
    className: (0, _classnames.default)('flex-grow-0', type, className),
    "data-testid": testId
  }, children);
};

exports.Link = Link;