import type { Meta, StoryObj } from '@storybook/react';
import { NormalText } from './Text';
import { string } from 'prop-types';

const meta = {
  title: 'Components/Atom/Text',
  component: NormalText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'string' },
    inputType: { options: ['primary'], control: { type: 'radio' } },
    placeholder: { control: 'string' },
  },
} satisfies Meta<typeof NormalText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'search',
    inputType: 'primary',
    placeholder: 'place holder',
  },
};
