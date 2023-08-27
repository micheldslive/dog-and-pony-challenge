import type { StoryFn } from '@storybook/react'

import { ExternalLink, ExternalLinkProps } from '.'

const ExternalLinkStory = {
  title: 'UI/External Link',
  component: ExternalLink,
}

const Template: StoryFn<ExternalLinkProps> = (args) => {
  return <ExternalLink {...args}>micheldslive@gmail.com</ExternalLink>
}

export const Default = Template.bind({})

Default.args = { href: `mailto:micheldslive@gmail.com` }

export default ExternalLinkStory
