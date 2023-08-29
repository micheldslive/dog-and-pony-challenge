import { Laptop, XIcon, Moon, Sun } from 'lucide-react'

export type Icon = typeof XIcon

export type IconsProps = {
  select: keyof typeof Icons
}

export const Icons = {
  sun: Sun,
  moon: Moon,
  laptop: Laptop,
}
