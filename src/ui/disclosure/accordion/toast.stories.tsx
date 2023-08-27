import { useState } from 'react'

import type { Meta, StoryFn } from '@storybook/react'

import { Icon } from '@/ui/media'

import { Accordion } from '.'

const AccordionStory = {
  title: 'UI/Accordion',
  component: Accordion.Root,
} as Meta

const AccordionComponent: React.FC = () => {
  const [mode, setMode] = useState(false)

  const handleToggle = () => {
    setMode(!mode)
  }

  return (
    <Accordion.Root collapsible onValueChange={handleToggle} type='single'>
      <Accordion.Item value={'1'}>
        <Accordion.Trigger>
          <div className='text-left'>
            <Accordion.Header>Title</Accordion.Header>
            <span>Subtitle</span>
          </div>
          <div className='text-accent-blue group-data-[state=open]:rotate-180 group-data-[state=open]:text-white'>
            <Icon as='chevron-down' size='md' />
          </div>
        </Accordion.Trigger>
        <Accordion.Content>
          <div className='flex flex-col gap-4'>Content</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

const Template: StoryFn<{ message: string }> = () => <AccordionComponent />

export const Default = Template.bind({})

Default.args = {}

export default AccordionStory
