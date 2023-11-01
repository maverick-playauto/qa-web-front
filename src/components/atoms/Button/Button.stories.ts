import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import theme from '../../../assets/styles/Theme';

const meta = {
  title: 'ATOM/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: theme.color.black,
    btnContent: 'Button',
  },
};
