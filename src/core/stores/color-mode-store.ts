import { createStore, useStore } from 'zustand'
import { persist } from 'zustand/middleware'

export type ColorModeProps = 'light' | 'dark' | 'system'

interface States {
  colorMode: ColorModeProps
}

interface Action {
  (colorMode: ColorModeProps): void
}

interface Actions {
  setColorMode: Action
}

const useColorModeStore = createStore<States & Actions>()(
  persist(
    (set) => ({
      colorMode: 'system',
      setColorMode: (colorMode) => {
        set((state) => ({ ...state, colorMode }))
      },
    }),
    {
      name: 'colorMode',
    },
  ),
)

export const useColorMode = () => useStore(useColorModeStore)
