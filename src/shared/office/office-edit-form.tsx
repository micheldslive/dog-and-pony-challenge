import { OfficeWithEditing } from '@/core/stores'
import { hasValidationError, officeFormShape } from '@/core/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import * as RadixSeparatorPrimitive from '@radix-ui/react-separator'
import { Controller, useForm } from 'react-hook-form'

import { Button, Input } from '@/ui/form'

import { formatToPhone } from '@/utils/formatters'

type OfficeEditFormProps = {
  office: OfficeWithEditing
  onEdit: (office: OfficeWithEditing) => void
}

export const OfficeEditForm = ({ office, onEdit }: OfficeEditFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: office,
    resolver: zodResolver(officeFormShape),
  })

  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit(onEdit)}>
      <div className='flex flex-col gap-6'>
        <Input
          aria-invalid={errors.title ? 'true' : 'false'}
          helperText={errors.title?.message}
          label='Title'
          required
          status={errors.title && 'error'}
          {...register('title')}
        />
        <Input
          aria-invalid={errors.address ? 'true' : 'false'}
          helperText={errors.address?.message}
          label='Enter the address'
          required
          status={errors.address && 'error'}
          {...register('address')}
        />
      </div>
      <div>
        <h4 className='text-xs uppercase'>Contact Information</h4>
        <RadixSeparatorPrimitive.Root
          decorative
          className='bg-primary-light-grey mt-4 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full'
        />
      </div>
      <div className='flex flex-col gap-6'>
        <Input
          aria-invalid={errors.contact?.name ? 'true' : 'false'}
          helperText={errors.contact?.name?.message}
          label='Full name'
          required
          status={errors.contact?.name && 'error'}
          {...register('contact.name')}
        />
        <Input
          aria-invalid={errors.contact?.position ? 'true' : 'false'}
          helperText={errors.contact?.position?.message}
          label='Job Position'
          required
          status={errors.contact?.position && 'error'}
          {...register('contact.position')}
        />
        <Input
          aria-invalid={errors.contact?.email ? 'true' : 'false'}
          helperText={errors.contact?.email?.message}
          label='Email address'
          placeholder='name@example.com'
          required
          status={errors.contact?.email && 'error'}
          {...register('contact.email')}
        />
        <Controller
          name='contact.phone'
          control={control}
          render={({ field }) => (
            <Input
              aria-invalid={errors.contact?.phone ? 'true' : 'false'}
              helperText={errors.contact?.phone?.message}
              label='Phone'
              maxLength={14}
              placeholder='(xxx) xxx-xxxx'
              required
              status={errors.contact?.phone && 'error'}
              {...field}
              onChange={(e) => {
                const value = e.currentTarget.value
                const formattedValueAsPhone = formatToPhone(value)
                field.onChange(formattedValueAsPhone)
              }}
              value={field.value}
            />
          )}
        />
      </div>
      <Button disabled={hasValidationError(errors)} type='submit'>
        Save
      </Button>
    </form>
  )
}
