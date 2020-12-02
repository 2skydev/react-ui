import _pt from "prop-types";
import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const Button = props => {
  const {
    color,
    children
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};

Button.propTypes = {
  color: _pt.string.isRequired
};
export default withStyles(styles, {
  name: 'Button'
})(Button);
//# sourceMappingURL=index.js.map