import type { Meta, StoryObj } from '@storybook/react';
import { NormalInput } from './Input';
import theme from '../../../assets/styles/Theme';

const meta = {
  title: 'NormalInput',
  component: NormalInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof NormalInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: theme.color.black,
  },
};
