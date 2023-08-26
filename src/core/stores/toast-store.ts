import { createStore, useStore } from 'zustand'

type Actions = {
  reset: (open: boolean) => void
  toggle: (open: boolean) => (value: string) => void
}

type States = {
  open: boolean
  message?: string
}

const useToastStore = createStore<States & Actions>((set) => ({
  message: undefined,
  open: false,
  reset: (open) => set(() => ({ open, message: undefined })),
  toggle: (open) => (message) => set(() => ({ open, message })),
}))

export const useToast = () => useStore(useToastStore)
