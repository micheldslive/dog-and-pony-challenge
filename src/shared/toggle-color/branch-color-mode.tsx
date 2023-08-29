import { PropsWithChildren, ReactNode } from 'react'

import { useColorMode } from '@/core/stores/color-mode-store'

export function BranchColorMode({
  children,
}: PropsWithChildren<{ children: ReactNode[] }>): JSX.Element | null {
  const { colorMode } = useColorMode()

  if (colorMode === 'light' && children.length > 0) {
    return <>{children[0]}</>
  } else if (children.length > 1) {
    return <>{children[1]}</>
  } else {
    return null
  }
}
