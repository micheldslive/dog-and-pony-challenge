'use client'
import { useState } from 'react'

import { useOffices } from '@/core/stores'
import { useToast } from '@/core/stores'
import * as RadixSeparatorPrimitive from '@radix-ui/react-separator'
import clsx from 'clsx'

import { Accordion, Collapsible } from '@/ui/disclosure'
import { Button, IconButton } from '@/ui/form'
import { Icon } from '@/ui/media'

import { OfficeEditForm } from './office-edit-form'
import { OfficeInfo } from './office-info'
import { OfficeInsertForm } from './office-insert-form'

export const OfficeList = () => {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false)
  const { toggle } = useToast()

  const {
    offices,
    newOffice,
    editOffice,
    deleteOffice,
    toggleEditingOffice,
    resetEditingOffices,
  } = useOffices()

  const onChangeAccordion = () => {
    resetEditingOffices()
    setIsCollapsibleOpen(false)
  }

  return (
    <div className='flex flex-col gap-8'>
      <Collapsible.Root
        open={isCollapsibleOpen}
        onOpenChange={setIsCollapsibleOpen}
      >
        {!isCollapsibleOpen ? (
          <Collapsible.Trigger asChild>
            <Button
              className={clsx('h-14 justify-between rounded-lg px-6')}
              fullWidth
              rightAddon={<Icon as='add' />}
            >
              Add New Location
            </Button>
          </Collapsible.Trigger>
        ) : (
          <div className='flex items-center justify-between rounded-lg bg-white px-6 py-4'>
            <h3 className='text-primary-dark-blue text-xl font-bold'>
              New Location
            </h3>
            <Collapsible.Trigger asChild>
              <IconButton size='sm' variant='neutral'>
                <Icon as='cross' />
              </IconButton>
            </Collapsible.Trigger>
          </div>
        )}
        <Collapsible.Content>
          <OfficeInsertForm
            onInsert={(office) => {
              newOffice({ office, toggle })
              setIsCollapsibleOpen(false)
            }}
          />
        </Collapsible.Content>
      </Collapsible.Root>
      <Accordion.Root
        collapsible
        onValueChange={onChangeAccordion}
        type='single'
      >
        {offices?.map(({ id, title, editing, contact, address }) => {
          return (
            <Accordion.Item key={id} value={id}>
              {editing ? (
                <div className='flex items-center justify-between px-6 py-4'>
                  <Accordion.Header asChild>
                    <h3 className='text-primary-dark-blue text-xl font-bold'>
                      Edit Location
                    </h3>
                  </Accordion.Header>
                  <Accordion.Trigger asChild>
                    <IconButton
                      onClick={() => toggleEditingOffice({ id })}
                      size='sm'
                      variant='neutral'
                    >
                      <Icon as='cross' />
                    </IconButton>
                  </Accordion.Trigger>
                </div>
              ) : (
                <Accordion.Trigger>
                  <div className='text-left'>
                    <Accordion.Header>{title}</Accordion.Header>
                    <span>{address}</span>
                  </div>
                  <div className='text-accent-blue group-data-[state=open]:rotate-180 group-data-[state=open]:text-white'>
                    <Icon as='chevron-down' size='md' />
                  </div>
                </Accordion.Trigger>
              )}
              <Accordion.Content>
                {editing ? (
                  <OfficeEditForm
                    office={{ id, title, editing, contact, address }}
                    onEdit={(office) => editOffice({ id, office, toggle })}
                  />
                ) : (
                  <div className='flex flex-col gap-4'>
                    <OfficeInfo contact={contact} />
                    <RadixSeparatorPrimitive.Root
                      className='bg-primary-light-grey data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full'
                      decorative
                    />
                    <div className='flex justify-between'>
                      <Button
                        leftAddon={<Icon as='pencil' size='lg' />}
                        onClick={() => toggleEditingOffice({ id })}
                        size='sm'
                        variant='neutral'
                      >
                        Edit
                      </Button>
                      <Button
                        leftAddon={<Icon as='trash' size='lg' />}
                        onClick={() => deleteOffice({ id, toggle })}
                        size='sm'
                        variant='attention'
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
              </Accordion.Content>
            </Accordion.Item>
          )
        })}
      </Accordion.Root>
    </div>
  )
}
