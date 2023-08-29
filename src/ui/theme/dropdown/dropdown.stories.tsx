import type { StoryFn } from '@storybook/react'

import { ThemeToggle } from '@/shared/toggle-color'
import { BranchColorMode } from '@/shared/toggle-color/branch-color-mode'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '.'
import { Button } from '../button'
import { Icons } from '../icons'

const DropdownStory = {
  title: 'Theme/Dropdown',
  component: ThemeToggle.Main,
}

const Template: StoryFn = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <BranchColorMode>
            <Icons.sun className='hover:text-slate-900' />
            <Icons.moon className='hover:text-slate-900 dark:text-white dark:hover:text-slate-100' />
          </BranchColorMode>
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem>
          <BranchColorMode>
            <Icons.sun className='mr-2 h-4 w-4' />
            <Icons.moon className='mr-2 h-4 w-4' />
          </BranchColorMode>
          <span>Theme</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const Default = Template.bind({})

Default.args = {}

export default DropdownStory
