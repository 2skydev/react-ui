import Button from './index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: 'color'
    }
  }
}

const Template = (args: any) => <Button {...args} />

export const Primary: any = Template.bind({})

Primary.args = {
  color: 'red',
  children: 'hi'
}