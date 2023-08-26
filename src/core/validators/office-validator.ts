import { z } from 'zod'

import { NAME_REGEX, PHONE_REGEX } from '@/utils/regex'

// Office Form Error Messages
const EMAIL_ERROR_MESSAGE = 'Please, provide a valid email'
const EMPTY_ERROR_MESSAGE = 'This field cannot be empty'
const INVALID_NAME_MESSAGE = 'Please, fill a full name. E.g.: John Doe'
const PHONE_ERROR_MESSAGE = 'Plase, provide a valid phone. E.g.: (555) 555-5555'

// Office Toast Messages
export const DELETED_MESSAGE = 'The location has been deleted.'
export const INSERTED_MESSAGE = 'The location has been created.'
export const UPDATED_MESSAGE = 'The location has been updated.'

// Office Insert & Edit Form Shape
export const officeFormShape = z.object({
  title: z.string().min(1, {
    message: EMPTY_ERROR_MESSAGE,
  }),
  address: z.string().min(1, {
    message: EMPTY_ERROR_MESSAGE,
  }),
  contact: z.object({
    name: z
      .string()
      .min(2, { message: EMPTY_ERROR_MESSAGE })
      .regex(NAME_REGEX, { message: INVALID_NAME_MESSAGE }),
    position: z.string().min(1, {
      message: EMPTY_ERROR_MESSAGE,
    }),
    email: z
      .string()
      .min(1, { message: EMPTY_ERROR_MESSAGE })
      .email({ message: EMAIL_ERROR_MESSAGE }),
    phone: z
      .string()
      .min(1, { message: EMPTY_ERROR_MESSAGE })
      .regex(PHONE_REGEX, { message: PHONE_ERROR_MESSAGE }),
  }),
})

// Office Form Validations Helpers
export const hasValidationError = (object: object): boolean =>
  Object.keys(object).length !== 0
