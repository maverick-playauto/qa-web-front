import type { Meta, StoryObj } from '@storybook/react';
import { NormalButton } from './Button';

const meta = {
  title: 'NormalButton',
  component: NormalButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonType: { control: 'radio' },
    width: { control: 'text' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof NormalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    width: 'medium',
    margin: 5,
    padding: 3,
  },
};
