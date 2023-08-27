'use client'
import * as RadixIconPrimitive from '@radix-ui/react-accessible-icon'
import clsx from 'clsx'

const icons = {
  add: (
    <svg
      fill='none'
      height='16px'
      viewBox='0 0 16 16'
      width='16px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path stroke='currentColor' d='M9 0v16M16.5 8.5H.5' />
    </svg>
  ),
  'chevron-down': (
    <svg
      fill='none'
      height='16px'
      viewBox='0 0 18 10'
      width='16px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m1 1 8 8 8-8'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  check: (
    <svg
      fill='none'
      height='16px'
      viewBox='0 0 24 24'
      width='16px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m5 13 4 4L19 7'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  ),
  cross: (
    <svg
      fill='none'
      height='16px'
      viewBox='0 0 14 14'
      width='16px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path fill='#989EA7' d='M1 13 13 1 1 13ZM1 1l12 12L1 1Z' />
      <path
        d='m1 1 12 12M1 13 13 1 1 13Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  pencil: (
    <svg
      fill='none'
      height='16px'
      viewBox='0 0 24 24'
      width='16px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m15.232 5.232 3.536 3.536m-2.036-5.036a2.5 2.5 0 0 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  ),
  trash: (
    <svg
      fill='none'
      height='16px'
      viewBox='0 0 24 24'
      width='16px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 11v6m4-6v6M4 7h16m-1 0-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7h14Zm-4 0V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h6Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  ),
  warn: (
    <svg
      fill='none'
      height='16px'
      viewBox='0 0 20 20'
      width='16px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        clipRule='evenodd'
        d='M18 10a8 8 0 1 1-16.001 0A8 8 0 0 1 18 10Zm-7 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-9a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  ),
}

type IconSizes = 'sm' | 'md' | 'lg'
type IconVariants = keyof typeof icons

export type IconProps = {
  as: IconVariants
  label?: string
  size?: IconSizes
}

export const Icon = ({ as, label, size = 'sm' }: IconProps) => {
  return (
    <RadixIconPrimitive.Root label={label ?? `${as}-icon`}>
      <div
        className={clsx(
          'inline-flex items-center justify-center leading-none text-inherit',
          size === 'sm' && 'h-4 w-4',
          size === 'md' && 'h-5 w-5',
          size === 'lg' && 'h-6 w-6',
        )}
      >
        {icons[as]}
      </div>
    </RadixIconPrimitive.Root>
  )
}
