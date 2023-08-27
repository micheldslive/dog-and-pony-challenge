'use client'
import { ComponentProps, forwardRef } from 'react'

import * as RadixAccordionPrimitive from '@radix-ui/react-accordion'
import clsx from 'clsx'

type RootProps = ComponentProps<typeof RadixAccordionPrimitive.Root>

const Root = ({ children, ...props }: RootProps) => {
  return (
    <RadixAccordionPrimitive.Root className='flex flex-col gap-6' {...props}>
      {children}
    </RadixAccordionPrimitive.Root>
  )
}

type TriggerProps = ComponentProps<typeof RadixAccordionPrimitive.Trigger>

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ asChild, children, className, ...props }, forwardRef) => {
    return (
      <RadixAccordionPrimitive.Trigger
        asChild={asChild}
        {...(!asChild && {
          className: clsx(
            'data-[state=open]:bg-primary-grey data-[state=open]:shadow-base group flex w-full items-center justify-between gap-6 rounded-lg p-6 outline-none transition data-[state=open]:rounded-b-none data-[state=open]:rounded-t-lg data-[state=open]:text-white',
          ),
        })}
        {...props}
        ref={forwardRef}
      >
        {children}
      </RadixAccordionPrimitive.Trigger>
    )
  },
)

type ContentProps = RadixAccordionPrimitive.AccordionContentProps

const Content = ({ children, ...props }: ContentProps) => {
  return (
    <RadixAccordionPrimitive.Content
      className='data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden'
      {...props}
    >
      <div className='px-8 py-6'>{children}</div>
    </RadixAccordionPrimitive.Content>
  )
}

type HeaderProps = RadixAccordionPrimitive.AccordionHeaderProps

const Header = ({ asChild, children, className, ...props }: HeaderProps) => {
  return (
    <RadixAccordionPrimitive.Header
      asChild={asChild}
      {...(!asChild && {
        className: clsx(
          'data-[state=closed]:text-primary-dark-blue text-2xl font-bold leading-9 data-[state=open]:text-white',
        ),
      })}
      {...props}
    >
      {children}
    </RadixAccordionPrimitive.Header>
  )
}

type ItemProps = ComponentProps<typeof RadixAccordionPrimitive.Item>

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ children, ...props }, forwardRef) => {
    return (
      <RadixAccordionPrimitive.Item
        className='shadow-base focus-within:ring-accent-blue rounded-lg bg-white outline-none focus-within:ring focus-within:ring-offset-1'
        {...props}
        ref={forwardRef}
      >
        {children}
      </RadixAccordionPrimitive.Item>
    )
  },
)

// Component Display Names
Item.displayName = 'AccordionItem'
Trigger.displayName = 'AccordionTrigger'

// Exports
export const Accordion = {
  Root,
  Content,
  Item,
  Trigger,
  Header,
}
