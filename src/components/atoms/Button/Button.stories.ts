import type { Meta, StoryObj } from '@storybook/react';
import { NormalButton } from './Button';
import theme from '../../../assets/styles/Theme';

const meta = {
  title: 'NormalButton',
  component: NormalButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof NormalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: theme.color.black,
  },
};
