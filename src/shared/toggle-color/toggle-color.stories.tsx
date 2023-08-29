import type { StoryFn } from '@storybook/react'

import { ThemeToggle } from '.'

const ThemeToggleStory = {
  title: 'Theme/Theme Change',
  component: ThemeToggle,
}

const Template: StoryFn = () => {
  return <ThemeToggle.Main />
}

export const Default = Template.bind({})

Default.args = {}

export default ThemeToggleStory
