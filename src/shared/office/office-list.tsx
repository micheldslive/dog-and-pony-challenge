'use client'
import { useState } from 'react'

import { useOffices } from '@/core/stores'
import { useToast } from '@/core/stores'
import * as RadixSeparatorPrimitive from '@radix-ui/react-separator'
import clsx from 'clsx'

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/ui/disclosure'
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
      <Collapsible open={isCollapsibleOpen} onOpenChange={setIsCollapsibleOpen}>
        {!isCollapsibleOpen ? (
          <CollapsibleTrigger asChild>
            <Button
              className={clsx('h-14 justify-between rounded-lg px-6')}
              fullWidth
              rightAddon={<Icon as='add' />}
            >
              Add New Location
            </Button>
          </CollapsibleTrigger>
        ) : (
          <div className='flex items-center justify-between rounded-lg bg-white px-6 py-4'>
            <h3 className='text-primary-dark-blue text-xl font-bold'>
              New Location
            </h3>
            <CollapsibleTrigger asChild>
              <IconButton size='sm' variant='neutral'>
                <Icon as='cross' />
              </IconButton>
            </CollapsibleTrigger>
          </div>
        )}
        <CollapsibleContent>
          <OfficeInsertForm
            onInsert={(office) => {
              newOffice({ office, toggle })
              setIsCollapsibleOpen(false)
            }}
          />
        </CollapsibleContent>
      </Collapsible>
      <Accordion collapsible onValueChange={onChangeAccordion} type='single'>
        {offices?.map(({ id, title, editing, contact, address }) => {
          return (
            <AccordionItem key={id} value={id}>
              {editing ? (
                <div className='flex items-center justify-between px-6 py-4'>
                  <AccordionHeader asChild>
                    <h3 className='text-primary-dark-blue text-xl font-bold'>
                      Edit Location
                    </h3>
                  </AccordionHeader>
                  <AccordionTrigger asChild>
                    <IconButton
                      onClick={() => toggleEditingOffice({ id })}
                      size='sm'
                      variant='neutral'
                    >
                      <Icon as='cross' />
                    </IconButton>
                  </AccordionTrigger>
                </div>
              ) : (
                <AccordionTrigger>
                  <div className='text-left'>
                    <AccordionHeader>{title}</AccordionHeader>
                    <span>{address}</span>
                  </div>
                  <div className='text-accent-blue group-data-[state=open]:rotate-180 group-data-[state=open]:text-white'>
                    <Icon as='chevron-down' size='md' />
                  </div>
                </AccordionTrigger>
              )}
              <AccordionContent>
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
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
