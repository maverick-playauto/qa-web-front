import type { Meta, StoryObj } from '@storybook/react';
import { NormalSelect } from './Select';

const meta = {
  title: 'NormalSelect',
  component: NormalSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NormalSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    margin: 5,
    padding: 3,
  },
};
