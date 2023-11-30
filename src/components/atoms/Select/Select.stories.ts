import type { Meta, StoryObj } from '@storybook/react';
import { NormalSelect } from './Select';

const meta = {
  title: 'Components/Atom/Select',
  component: NormalSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: {
        type: 'array',
      },
    },
    width: { control: 'select' },
  },
} satisfies Meta<typeof NormalSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    selectType: 'primary',
    options: [
      { name: 'opt11', value: 1 },
      { name: 'opt22', value: 2 },
    ],
    width: 'small',
    subject: 'filter',
  },
};
