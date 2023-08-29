import { forwardRef, InputHTMLAttributes } from 'react'

import * as Label from '@radix-ui/react-label'
import clsx from 'clsx'

import { Icon } from '@/ui/media'

type InputStatus = 'default' | 'error'

export type InputProps = {
  helperText?: string
  label?: string
  name: string
  required?: boolean
  status?: InputStatus
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { helperText, label, name, status = 'default', required, ...props },
    forwardRef,
  ) => {
    return (
      <div className='text-primary-dark-blue relative flex flex-col gap-1 pb-2'>
        {!!label && (
          <Label.Root
            className='text-primary-dark-blue inline-flex cursor-pointer gap-1 self-start text-base'
            htmlFor={name}
          >
            {label}
            {required && <span className='text-primary-grey'>*</span>}
          </Label.Root>
        )}
        <div
          className={clsx(
            'shadow-micro focus-within:border-accent-blue flex min-h-[2.5rem] items-center rounded border-2 bg-white px-3 transition',
            props.disabled &&
              'border-primary-grey text-primary-grey cursor-not-allowed',
            status === 'error' && 'border-accent-red text-accent-red',
            status === 'default' &&
              'border-primary-grey text-primary-dark-blue',
          )}
        >
          <input
            className={clsx(
              'text-primary-dark-blue placeholder:text-primary-grey w-full leading-none outline-none dark:bg-transparent',
              props.disabled && 'text-primary-grey cursor-not-allowed',
            )}
            name={name}
            ref={forwardRef}
            type='text'
            {...(label ? { id: name } : {})}
            {...props}
          />
          {status === 'error' && (
            <div className='text-accent-red inline-flex items-center justify-center'>
              <Icon as='warn' size='md' />
            </div>
          )}
        </div>
        {!!helperText && (
          <small
            className={clsx(
              'absolute -bottom-4 text-xs',
              status === 'error' && 'text-accent-red',
            )}
          >
            {helperText}
          </small>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
