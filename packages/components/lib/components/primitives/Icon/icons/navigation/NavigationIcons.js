"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unfold_more = exports.unfold_less = exports.subdirectory_arrow_right = exports.subdirectory_arrow_left = exports.refresh = exports.more_vert = exports.more_horiz = exports.menu = exports.last_page = exports.fullscreen_exit = exports.fullscreen = exports.first_page = exports.expand_more = exports.expand_less = exports.close = exports.chevron_right = exports.chevron_left = exports.check = exports.cancel = exports.arrow_upward = exports.arrow_right = exports.arrow_left = exports.arrow_forward_ios = exports.arrow_forward = exports.arrow_drop_up = exports.arrow_drop_down_circle = exports.arrow_drop_down = exports.arrow_downward = exports.arrow_back_ios = exports.arrow_back = exports.apps = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apps = ({
  type
}) => {
  const path = {
    filled: 'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z',
    outlined: 'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z',
    rounded: 'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.apps = apps;

const arrow_back = ({
  type
}) => {
  const path = {
    filled: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
    outlined: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
    rounded: 'M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 00-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_back = arrow_back;

const arrow_back_ios = ({
  type
}) => {
  const path = {
    filled: 'M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z',
    outlined: 'M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z',
    rounded: 'M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_back_ios = arrow_back_ios;

const arrow_downward = ({
  type
}) => {
  const path = {
    filled: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
    outlined: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
    rounded: 'M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_downward = arrow_downward;

const arrow_drop_down = ({
  type
}) => {
  const path = {
    filled: 'M7 10l5 5 5-5z',
    outlined: 'M7 10l5 5 5-5H7z',
    rounded: 'M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_drop_down = arrow_drop_down;

const arrow_drop_down_circle = ({
  type
}) => {
  const path = {
    filled: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z',
    outlined: 'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8z',
    rounded: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.35 12.65l-2.79-2.79c-.32-.32-.1-.86.35-.86h5.59c.45 0 .67.54.35.85l-2.79 2.79c-.2.2-.52.2-.71.01z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_drop_down_circle = arrow_drop_down_circle;

const arrow_drop_up = ({
  type
}) => {
  const path = {
    filled: 'M7 14l5-5 5 5z',
    outlined: 'M7 14l5-5 5 5H7z',
    rounded: 'M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_drop_up = arrow_drop_up;

const arrow_forward = ({
  type
}) => {
  const path = {
    filled: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
    outlined: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
    rounded: 'M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_forward = arrow_forward;

const arrow_forward_ios = ({
  type
}) => {
  const path = {
    filled: 'M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z',
    outlined: 'M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z',
    rounded: 'M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_forward_ios = arrow_forward_ios;

const arrow_left = ({
  type
}) => {
  const path = {
    filled: 'M14 7l-5 5 5 5V7z',
    outlined: 'M14 7l-5 5 5 5V7z',
    rounded: 'M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_left = arrow_left;

const arrow_right = ({
  type
}) => {
  const path = {
    filled: 'M10 17l5-5-5-5v10z',
    outlined: 'M10 17l5-5-5-5v10z',
    rounded: 'M11.71 15.29l2.59-2.59c.39-.39.39-1.02 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_right = arrow_right;

const arrow_upward = ({
  type
}) => {
  const path = {
    filled: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z',
    outlined: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z',
    rounded: 'M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59a.9959.9959 0 00-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.arrow_upward = arrow_upward;

const cancel = ({
  type
}) => {
  const path = {
    filled: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
    outlined: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z',
    rounded: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 010-1.41L10.59 12 7.7 9.11a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.cancel = cancel;

const check = ({
  type
}) => {
  const path = {
    filled: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
    outlined: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
    rounded: 'M9 16.17L5.53 12.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L9 16.17z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.check = check;

const chevron_left = ({
  type
}) => {
  const path = {
    filled: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
    outlined: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z',
    rounded: 'M14.71 6.71a.9959.9959 0 00-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.chevron_left = chevron_left;

const chevron_right = ({
  type
}) => {
  const path = {
    filled: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
    outlined: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z',
    rounded: 'M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.chevron_right = chevron_right;

const close = ({
  type
}) => {
  const path = {
    filled: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    outlined: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z',
    rounded: 'M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.close = close;

const expand_less = ({
  type
}) => {
  const path = {
    filled: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z',
    outlined: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z',
    rounded: 'M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.expand_less = expand_less;

const expand_more = ({
  type
}) => {
  const path = {
    filled: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
    outlined: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z',
    rounded: 'M15.88 9.29L12 13.17 8.12 9.29a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.expand_more = expand_more;

const first_page = ({
  type
}) => {
  const path = {
    filled: 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z',
    outlined: 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z',
    rounded: 'M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.first_page = first_page;

const fullscreen = ({
  type
}) => {
  const path = {
    filled: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z',
    outlined: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z',
    rounded: 'M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.fullscreen = fullscreen;

const fullscreen_exit = ({
  type
}) => {
  const path = {
    filled: 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z',
    outlined: 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z',
    rounded: 'M6 16h2v2c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm2-8H6c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1s-1 .45-1 1v2zm7 11c.55 0 1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm1-11V6c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.fullscreen_exit = fullscreen_exit;

const last_page = ({
  type
}) => {
  const path = {
    filled: 'M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z',
    outlined: 'M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z',
    rounded: 'M6.29 8.11L10.18 12l-3.89 3.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L7.7 6.7a.9959.9959 0 00-1.41 0c-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.last_page = last_page;

const menu = ({
  type
}) => {
  const path = {
    filled: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
    outlined: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
    rounded: 'M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.menu = menu;

const more_horiz = ({
  type
}) => {
  const path = {
    filled: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    outlined: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    rounded: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.more_horiz = more_horiz;

const more_vert = ({
  type
}) => {
  const path = {
    filled: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    outlined: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    rounded: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.more_vert = more_vert;

const refresh = ({
  type
}) => {
  const path = {
    filled: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
    outlined: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
    rounded: 'M17.65 6.35c-1.63-1.63-3.94-2.57-6.48-2.31-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20c3.19 0 5.93-1.87 7.21-4.56.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53-1.13 2.43-3.84 3.97-6.8 3.31-2.22-.49-4.01-2.3-4.48-4.52C5.31 9.44 8.26 6 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.refresh = refresh;

const subdirectory_arrow_left = ({
  type
}) => {
  const path = {
    filled: 'M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z',
    outlined: 'M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z',
    rounded: 'M5.71 15.71l4.58 4.58c.39.39 1.03.39 1.42 0 .39-.39.39-1.03 0-1.42L8.83 16H19c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v9H8.83l2.88-2.87c.39-.39.39-1.03 0-1.42-.39-.39-1.03-.39-1.42 0l-4.58 4.58c-.39.39-.39 1.03 0 1.42z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.subdirectory_arrow_left = subdirectory_arrow_left;

const subdirectory_arrow_right = ({
  type
}) => {
  const path = {
    filled: 'M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z',
    outlined: 'M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z',
    rounded: 'M18.29 15.71l-4.58 4.58c-.39.39-1.03.39-1.42 0-.39-.39-.39-1.03 0-1.42L15.17 16H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v9h9.17l-2.88-2.87c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0l4.58 4.58c.39.39.39 1.03 0 1.42z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.subdirectory_arrow_right = subdirectory_arrow_right;

const unfold_less = ({
  type
}) => {
  const path = {
    filled: 'M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z',
    outlined: 'M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z',
    rounded: 'M8.12 19.3c.39.39 1.02.39 1.41 0L12 16.83l2.47 2.47c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-3.17-3.17a.9959.9959 0 00-1.41 0l-3.17 3.17c-.4.38-.4 1.02-.01 1.41zm7.76-14.6a.9959.9959 0 00-1.41 0L12 7.17 9.53 4.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.03 0 1.42l3.17 3.17c.39.39 1.02.39 1.41 0l3.17-3.17c.4-.39.4-1.03.01-1.42z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.unfold_less = unfold_less;

const unfold_more = ({
  type
}) => {
  const path = {
    filled: 'M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z',
    outlined: 'M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z',
    rounded: 'M12 5.83l2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7a.9959.9959 0 00-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34l-2.46-2.46a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L12 18.17z'
  };
  return /*#__PURE__*/_react.default.createElement("path", {
    d: path[type]
  });
};

exports.unfold_more = unfold_more;