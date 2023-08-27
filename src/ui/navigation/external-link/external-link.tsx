import { ComponentProps } from 'react'

import clsx from 'clsx'

export type ExternalLinkProps = {
  href: string
} & ComponentProps<'a'>

export const ExternalLink = ({
  children,
  className,
  href,
  ...props
}: ExternalLinkProps) => {
  return (
    <a
      className={clsx(
        'text-accent-blue focus-visible:outline-accent-blue w-min outline-none focus-visible:rounded-sm',
        className,
      )}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      {...props}
    >
      {children}
    </a>
  )
}
