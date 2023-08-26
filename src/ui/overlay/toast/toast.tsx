'use client'
import { useToast } from '@/core/stores'
import * as RadixToastPrimitive from '@radix-ui/react-toast'

import { IconButton } from '@/ui/form'
import { Icon } from '@/ui/media'

type ToastProviderProps = RadixToastPrimitive.ToastProps

export const ToastProvider = ({ children, ...props }: ToastProviderProps) => {
  return (
    <RadixToastPrimitive.Provider
      duration={3000}
      swipeDirection='up'
      {...props}
    >
      {children}
      <RadixToastPrimitive.Viewport className='fixed right-0 top-0 z-40 m-0 flex h-20 w-full max-w-[100vw] outline-none' />
    </RadixToastPrimitive.Provider>
  )
}

export const Toast = () => {
  const { open, message, reset } = useToast()

  return (
    <RadixToastPrimitive.Root
      className='data-[state=closed]:animate-hide data-[state=open]:animate-show fixed inset-x-0 top-0 z-50 grid h-20 place-content-center content-center bg-white'
      open={open}
      onOpenChange={reset}
    >
      <RadixToastPrimitive.Description className='text-primary-dark-blue flex items-center gap-2 text-xs uppercase leading-none tracking-wide'>
        {!!message && (
          <>
            <div className='text-accent-blue'>
              <Icon as='check' size='md' />
            </div>
            <span>{message}</span>
          </>
        )}
      </RadixToastPrimitive.Description>
      <RadixToastPrimitive.Close
        aria-label='Close Toast'
        asChild
        className='absolute right-4 top-1/2 -translate-y-1/2'
      >
        <IconButton variant='neutral'>
          <Icon as='cross' />
        </IconButton>
      </RadixToastPrimitive.Close>
    </RadixToastPrimitive.Root>
  )
}
