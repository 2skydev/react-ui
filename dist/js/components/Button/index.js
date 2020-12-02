"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var color = props.color,
      children = props.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

Button.propTypes = {
  color: _propTypes.default.string.isRequired
};

var _default = (0, _styles.withStyles)(_styles2.default, {
  name: 'Button'
})(Button);

exports.default = _default;
//# sourceMappingURL=index.js.map