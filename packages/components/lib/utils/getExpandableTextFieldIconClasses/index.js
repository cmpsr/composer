"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpandableTextFieldIconClasses = void 0;

var _ExpandableTextFieldIcon = require("../../components/primitives/form/ExpandableTextFieldIcon");

const getExpandableTextFieldIconClasses = (iconPosition, isIconEnabled) => {
  const isIconLeft = iconPosition === _ExpandableTextFieldIcon.ExpandableTextFieldIconPosition.Left;
  return {
    wrapperClasses: 'flex items-end',
    iconWrapperClasses: `${isIconLeft ? 'order-1 pr-4' : 'order-2 pl-4'} min-h-2-625 md:min-h-3`,
    iconClasses: `${isIconEnabled ? 'text-fill-primary-100' : 'text-fill-primary-25'} fill-current cursor-pointer mt-2 md:mt-0-625`,
    expandableTextFieldClasses: `${isIconLeft ? 'order-2' : 'order-1'}`
  };
};

exports.getExpandableTextFieldIconClasses = getExpandableTextFieldIconClasses;