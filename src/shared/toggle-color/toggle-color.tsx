'use client'

import * as React from 'react'

import { ColorModeProps, useColorMode } from '@/core/stores'
import { useTheme } from 'next-themes'

import { Button } from '@/ui/theme/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/theme/dropdown'
import { Icons } from '@/ui/theme/icons'

import { BranchColorMode } from './branch-color-mode'

interface SetThemeProp {
  (theme: ColorModeProps): void
}

interface ContentProps {
  handleSetTheme: SetThemeProp
}

const Content = ({ handleSetTheme }: ContentProps) => {
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
        <DropdownMenuItem onClick={() => handleSetTheme('light')}>
          <Icons.sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSetTheme('dark')}>
          <Icons.moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSetTheme('system')}>
          <Icons.laptop className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const Main = () => {
  const { setTheme } = useTheme()
  const { colorMode, setColorMode } = useColorMode()

  const handleSetTheme: SetThemeProp = (theme) => {
    setTheme(theme)
    setColorMode(theme)
  }

  React.useEffect(() => {
    colorMode === 'system'
      ? setTheme('system')
      : colorMode === 'dark'
      ? setTheme('dark')
      : setTheme('light')
  }, [colorMode, setTheme])

  return (
    <>
      <Content handleSetTheme={handleSetTheme} />
    </>
  )
}

const Container = ({ children }: React.PropsWithChildren) => {
  return <div className='absolute right-4 top-4'>{children}</div>
}

export const Root = () => {
  return (
    <Container>
      <Main />
    </Container>
  )
}

export const ThemeToggle = {
  Root,
  Main,
}
