import type { Meta, StoryObj } from '@storybook/react';
import { NormalSelect } from './Select';

const meta = {
  title: 'ATOM/Button',
  component: NormalSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<typeof NormalSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'red',
  },
};
