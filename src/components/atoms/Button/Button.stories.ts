import type { Meta, StoryObj } from '@storybook/react';
import { NormalButton } from './Button';

const meta = {
  title: 'Components/Atom/Button',
  component: NormalButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonType: { control: 'radio' },
    width: { control: 'select' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof NormalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    buttonType: 'text',
    width: 'medium',
    margin: 5,
    padding: 3,
  },
};

export const Contained: Story = {
  args: {
    buttonType: 'contained',
    width: 'medium',
    margin: 5,
    padding: 3,
  },
};

export const Outlined: Story = {
  args: {
    buttonType: 'outlined',
    width: 'medium',
    margin: 5,
    padding: 3,
  },
};
