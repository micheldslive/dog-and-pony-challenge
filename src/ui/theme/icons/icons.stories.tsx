import type { Meta, StoryFn } from '@storybook/react'

import { ThemeToggle } from '@/shared/toggle-color'
import { BranchColorMode } from '@/shared/toggle-color/branch-color-mode'

import { Icons, IconsProps } from '.'

export default {
  title: 'Theme/Icons',
  component: ThemeToggle.Main,
  argTypes: {
    select: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<IconsProps>

const Template: StoryFn<IconsProps> = ({ select }) => {
  const Icon = Icons[select]
  return (
    <BranchColorMode>
      <Icon className='hover:text-slate-900' />
      <Icon className='hover:text-slate-900 dark:text-white dark:hover:text-slate-100' />
    </BranchColorMode>
  )
}

export const Laptop = Template.bind({})
export const Sun = Template.bind({})
export const Moon = Template.bind({})

Laptop.args = { select: 'laptop' }
Sun.args = { select: 'sun' }
Moon.args = { select: 'moon' }
