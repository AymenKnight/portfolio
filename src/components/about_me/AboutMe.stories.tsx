import type { Meta, StoryObj } from '@storybook/react';
import AboutMe from './AboutMe';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'AboutMe',
  component: AboutMe,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} satisfies Meta<typeof AboutMe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  
  },
};

