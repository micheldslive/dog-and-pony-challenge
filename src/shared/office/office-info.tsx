import { ExternalLink } from '@/ui/navigation'

import { OfficeContact } from '@/types/office'

type OfficeInfoProps = {
  contact: OfficeContact
}

export const OfficeInfo = ({ contact }: OfficeInfoProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-primary-dark-blue text-xl font-bold leading-normal'>
        {contact.name}
      </h3>
      <span className='text-primary-dark-blue'>{contact.position}</span>
      <ExternalLink href={`mailto:${contact.email}`}>
        {contact.email}
      </ExternalLink>
      <span className='text-primary-dark-blue'>{contact.phone}</span>
    </div>
  )
}
