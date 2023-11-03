import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import theme from '../../../assets/styles/Theme';

const meta = {
  title: 'ATOM/Button',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: theme.color.black,
  },
};
