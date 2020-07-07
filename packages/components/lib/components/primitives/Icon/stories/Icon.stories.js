"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rounded = exports.Outlined = exports.Filled = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _Typography = require("../../Typography");

var ActionIcons = _interopRequireWildcard(require("../icons/action"));

var AlertIcons = _interopRequireWildcard(require("../icons/alert"));

var AvIcons = _interopRequireWildcard(require("../icons/av"));

var CommunicationIcons = _interopRequireWildcard(require("../icons/communication"));

var ContentIcons = _interopRequireWildcard(require("../icons/content"));

var DeviceIcons = _interopRequireWildcard(require("../icons/device"));

var EditorIcons = _interopRequireWildcard(require("../icons/editor"));

var FileIcons = _interopRequireWildcard(require("../icons/file"));

var HardwareIcons = _interopRequireWildcard(require("../icons/hardware"));

var ImageIcons = _interopRequireWildcard(require("../icons/image"));

var ToggleIcons = _interopRequireWildcard(require("../icons/toggle"));

var PlacesIcons = _interopRequireWildcard(require("../icons/places"));

var NavigationIcons = _interopRequireWildcard(require("../icons/navigation"));

var NotificationIcons = _interopRequireWildcard(require("../icons/notification"));

var SocialIcons = _interopRequireWildcard(require("../icons/social"));

var MapsIcons = _interopRequireWildcard(require("../icons/maps"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Composer/Primitive/Icon',
  component: _.Icon
};
exports.default = _default;

const SectionIconWrapper = ({
  sectionName,
  icons,
  iconType
}) => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Typography.Typography, {
    tag: "h1",
    type: _Typography.TypographyTypes.Headline5
  }, sectionName), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap p-2"
  }, Object.keys(icons).map(key => {
    const iconComponent = icons[key];
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "flex flex-col items-center text-center h-24 w-40 mx-6",
      key: key
    }, /*#__PURE__*/_react.default.createElement(_.Icon, {
      className: "mx-auto"
    }, iconComponent({
      type: iconType
    })), /*#__PURE__*/_react.default.createElement("span", {
      title: key
    }, key));
  })));
};

const Filled = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Action",
  icons: ActionIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Alert",
  icons: AlertIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Av",
  icons: AvIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Communication",
  icons: CommunicationIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Content",
  icons: ContentIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Device",
  icons: DeviceIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Editor",
  icons: EditorIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "File",
  icons: FileIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Hardware",
  icons: HardwareIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Image",
  icons: ImageIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Toggle",
  icons: ToggleIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Places",
  icons: PlacesIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Navigation",
  icons: NavigationIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Notification",
  icons: NotificationIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Social",
  icons: SocialIcons,
  iconType: "filled"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Maps",
  icons: MapsIcons,
  iconType: "filled"
}));

exports.Filled = Filled;
Filled.story = {
  name: 'Filled Icons'
};

const Outlined = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Action",
  icons: ActionIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Alert",
  icons: AlertIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Av",
  icons: AvIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Communication",
  icons: CommunicationIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Content",
  icons: ContentIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Device",
  icons: DeviceIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Editor",
  icons: EditorIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "File",
  icons: FileIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Hardware",
  icons: HardwareIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Image",
  icons: ImageIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Toggle",
  icons: ToggleIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Places",
  icons: PlacesIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Navigation",
  icons: NavigationIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Notification",
  icons: NotificationIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Social",
  icons: SocialIcons,
  iconType: "outlined"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Maps",
  icons: MapsIcons,
  iconType: "outlined"
}));

exports.Outlined = Outlined;
Outlined.story = {
  name: 'Outlined Icons'
};

const Rounded = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Action",
  icons: ActionIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Alert",
  icons: AlertIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Av",
  icons: AvIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Communication",
  icons: CommunicationIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Content",
  icons: ContentIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Device",
  icons: DeviceIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Editor",
  icons: EditorIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "File",
  icons: FileIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Hardware",
  icons: HardwareIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Image",
  icons: ImageIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Toggle",
  icons: ToggleIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Places",
  icons: PlacesIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Navigation",
  icons: NavigationIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Notification",
  icons: NotificationIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Social",
  icons: SocialIcons,
  iconType: "rounded"
}), /*#__PURE__*/_react.default.createElement(SectionIconWrapper, {
  sectionName: "Maps",
  icons: MapsIcons,
  iconType: "rounded"
}));

exports.Rounded = Rounded;
Rounded.story = {
  name: 'Rounded Icons'
};