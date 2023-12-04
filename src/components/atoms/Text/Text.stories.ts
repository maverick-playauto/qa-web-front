import type { Meta, StoryObj } from '@storybook/react';
import { NormalText } from './Text';

const meta = {
  title: 'Components/Atom/Text',
  component: NormalText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    inputType: { options: ['primary'], control: { type: 'radio' } },
    placeholder: { control: 'string' },
    children: { control: 'string' },
    masking: { options: ['string', 'number', ''], control: { type: 'radio' } },
  },
} satisfies Meta<typeof NormalText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'search',
    inputType: 'primary',
    placeholder: 'place holder',
    children: '123',
    masking: '',
  },
};
