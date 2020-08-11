'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Tooltip = exports.TooltipPlace = exports.TOOLTIP_DEFAULT_TEST_ID = void 0;

const _react = _interopRequireDefault(require('react'));

const _classnames = _interopRequireDefault(require('classnames'));

const _reactTooltip = _interopRequireDefault(require('react-tooltip'));

const _Tooltip = require('./Tooltip.styles');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const TOOLTIP_DEFAULT_TEST_ID = 'tooltip';
exports.TOOLTIP_DEFAULT_TEST_ID = TOOLTIP_DEFAULT_TEST_ID;
const defaultColor = _colors.default['fill-primary-900'];
let TooltipPlace;
exports.TooltipPlace = TooltipPlace;

(function (TooltipPlace) {
  TooltipPlace['Left'] = 'left';
  TooltipPlace['Right'] = 'right';
  TooltipPlace['Bottom'] = 'bottom';
  TooltipPlace['Top'] = 'top';
})(TooltipPlace || (exports.TooltipPlace = TooltipPlace = {}));

const Tooltip = ({
  id,
  place = TooltipPlace.Top,
  tooltip,
  element,
  testId = TOOLTIP_DEFAULT_TEST_ID,
  className,
  backgroundColor,
}) => {
  const { arrowColor, defaultColor } = (0, _Tooltip.getStyles)(
    place,
    backgroundColor
  );
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      'data-testid': testId,
    },
    /*#__PURE__*/ _react.default.createElement(
      'a',
      {
        'data-tip': true,
        'data-for': id,
      },
      element
    ),
    /*#__PURE__*/ _react.default.createElement(
      _reactTooltip.default,
      {
        id: id,
        place: place,
        effect: 'solid',
        className: (0, _classnames.default)(
          defaultColor,
          arrowColor,
          className
        ),
      },
      tooltip
    )
  );
};

exports.Tooltip = Tooltip;
