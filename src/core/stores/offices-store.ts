import {
  DELETED_MESSAGE,
  INSERTED_MESSAGE,
  UPDATED_MESSAGE,
} from '@/core/validators'
import { v4 as uuid } from 'uuid'
import { createStore, useStore } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { Office } from '@/types/office'

type OfficeEditing = { editing: boolean }
export type OfficeWithEditing = Office & OfficeEditing

interface States {
  offices: OfficeWithEditing[]
}

type ActionsProps = {
  id: string
  office: OfficeWithEditing
  toggle: (open: boolean) => (value: string) => void
}

interface Action<T> {
  (props: T): void
}

interface Actions {
  newOffice: Action<Omit<ActionsProps, 'id'>>
  editOffice: Action<ActionsProps>
  toggleEditingOffice: Action<Pick<ActionsProps, 'id'>>
  deleteOffice: Action<Omit<ActionsProps, 'office'>>
  resetEditingOffices(): void
}

const useOfficesStore = createStore<States & Actions>()(
  persist(
    immer<States & Actions>((set) => ({
      offices: [],
      newOffice: ({ office, toggle }) => {
        set(({ offices }) => {
          const newOfficeId = uuid()
          offices.push({
            ...office,
            id: newOfficeId,
            editing: false,
          })
        })
        toggle(true)(INSERTED_MESSAGE)
      },
      editOffice: ({ office, id, toggle }) => {
        set(({ offices }) => ({
          offices: offices.map((prevOffice: OfficeWithEditing) => {
            if (prevOffice.id === id) {
              return { ...office, id: prevOffice.id, editing: false }
            }
            return prevOffice
          }),
        }))
        toggle(true)(UPDATED_MESSAGE)
      },
      toggleEditingOffice: ({ id }) => {
        set(({ offices }) => ({
          offices: offices.map((prevOffice: OfficeWithEditing) => {
            if (prevOffice.id === id) {
              return { ...prevOffice, editing: !prevOffice.editing }
            }
            return prevOffice
          }),
        }))
      },
      resetEditingOffices: () => {
        set(({ offices }) => ({
          offices: offices.map((prevOffice: OfficeWithEditing) => ({
            ...prevOffice,
            editing: false,
          })),
        }))
      },
      deleteOffice: ({ id, toggle }) => {
        set((state) => ({
          ...state,
          offices: state.offices.filter(
            (prevOffice: OfficeWithEditing) => prevOffice.id !== id,
          ),
        }))

        toggle(true)(DELETED_MESSAGE)
      },
    })),
    {
      name: 'offices',
    },
  ),
)

export const useOffices = () => useStore(useOfficesStore)
