import * as React from 'react';
import Button from './index';
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: 'color'
    }
  }
};

const Template = args => /*#__PURE__*/React.createElement(Button, args);

export const Primary = Template.bind({});
Primary.args = {
  color: 'red',
  children: 'hi'
};
//# sourceMappingURL=Button.stories.js.map