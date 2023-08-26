import { ComponentProps, forwardRef } from 'react'

import clsx from 'clsx'

type IconButtonProps = {
  children: React.ReactNode
  size?: 'sm' | 'base'
  variant?: 'primary' | 'neutral' | 'attention'
} & ComponentProps<'button'>

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { className, children, size = 'base', variant = 'primary', ...props },
    forwardRef,
  ) => {
    return (
      <button
        className={clsx(
          'disabled:bg-primary-grey inline-flex items-center justify-center rounded outline-none transition-colors disabled:cursor-not-allowed disabled:text-white',
          size === 'base' && 'h-8 w-8 p-0.5',
          size === 'sm' && 'h-6 w-6 p-0.5',
          variant === 'attention' &&
            'text-accent-red hover:ring-accent-red focus:ring-accent-red hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-2 disabled:uppercase',
          variant === 'neutral' &&
            'text-primary-grey hover:ring-primary-grey focus:ring-primary-grey hover:ring-2 hover:ring-offset-1 focus:ring-2 focus:ring-offset-2 disabled:uppercase',
          variant === 'primary' &&
            'bg-accent-blue hover:bg-primary-dark-blue focus:ring-accent-blue text-white focus:ring-2 focus:ring-offset-2',
          className,
        )}
        {...props}
        ref={forwardRef}
      >
        <span className='sr-only'>Icon</span>
        {children}
      </button>
    )
  },
)

// Display Names
IconButton.displayName = 'Button'
