(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@material-ui/styles", "./styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@material-ui/styles"), require("./styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.styles, global.styles);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _styles, _styles2) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

  var _styles3 = _interopRequireDefault(_styles2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Button = props => {
    const {
      color,
      children
    } = props;
    return /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null);
  };

  Button.propTypes = {
    color: _propTypes2.default.string.isRequired
  };
  exports.default = (0, _styles.withStyles)(_styles3.default, {
    name: 'Button'
  })(Button);
});
//# sourceMappingURL=index.js.map