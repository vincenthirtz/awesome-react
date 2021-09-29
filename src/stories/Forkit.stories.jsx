import React from 'react';

import { Forkit } from './Forkit';

export default {
  title: 'Example/Forkit',
  component: Forkit,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Forkit {...args} />;

export const Primary = Template.bind({});
Primary.args = {
//   primary: true,
  label: 'Forkit',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
