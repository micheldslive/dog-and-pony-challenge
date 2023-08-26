import { z } from 'zod'

// Shapes
export const officeContactShape = z.object({
  email: z.string(),
  name: z.string(),
  phone: z.string(),
  position: z.string().email(),
})

export const officeShape = z.object({
  address: z.string(),
  contact: officeContactShape,
  id: z.string(),
  title: z.string(),
})

export const officeListShape = officeShape.array()

export const officeShapeWithoutId = officeShape.omit({ id: true })

// Types
export type Office = z.infer<typeof officeShape>
export type OfficeContact = z.infer<typeof officeContactShape>
export type OfficeList = z.infer<typeof officeListShape>
export type OfficeWithoutId = z.infer<typeof officeShapeWithoutId>
