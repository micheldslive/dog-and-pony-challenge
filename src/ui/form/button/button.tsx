'use client'
import { ComponentProps, forwardRef } from 'react'

import clsx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  leftAddon?: JSX.Element
  rightAddon?: JSX.Element
  size?: 'sm' | 'base'
  variant?: 'primary' | 'neutral' | 'attention'
} & ComponentProps<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      fullWidth = false,
      leftAddon,
      rightAddon,
      size = 'base',
      variant = 'primary',
      ...props
    },
    forwardRef,
  ) => {
    return (
      <button
        className={clsx(
          'disabled:bg-primary-grey inline-flex w-fit min-w-[7ch] items-center justify-center gap-2  rounded text-center font-normal outline-none  transition-colors disabled:cursor-not-allowed disabled:text-white',
          fullWidth && 'w-full',
          size === 'base' && 'min-h-[40px] px-4 py-2 text-base',
          size === 'sm' && 'p-0.5 text-xs leading-none tracking-[0.02em]',
          variant === 'attention' &&
            'text-accent-red  hover:ring-accent-red focus:ring-accent-red uppercase hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-2 disabled:uppercase',
          variant === 'neutral' &&
            'text-primary-grey hover:ring-primary-grey focus:ring-primary-grey uppercase hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-2 disabled:uppercase',
          variant === 'primary' &&
            'bg-accent-blue hover:bg-primary-dark-blue focus:ring-accent-blue text-white focus:ring-2 focus:ring-offset-2',
          className,
        )}
        {...props}
        ref={forwardRef}
      >
        {!!leftAddon && (
          <div className='flex items-center justify-center'>{leftAddon}</div>
        )}
        <div>{children}</div>
        {!!rightAddon && (
          <div className='flex items-center justify-center'>{rightAddon}</div>
        )}
      </button>
    )
  },
)

// Display Names
Button.displayName = 'Button'
