import type { Meta, StoryObj } from '@storybook/react';
import ProjectItem from './ProjectItem';
import realtor from '@/public/pictures/realtor.png';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'ProjectItem',
  component: ProjectItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ProjectItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Project name',
    description: 'Project description',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    imageUrl: realtor,
  },
};
