import { z } from 'zod'

const selectOptionSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export type Option = z.infer<typeof selectOptionSchema>
  
export const InvestmentSchema = z.object({
  investedValue: z.string(),
  name: z.string(),
  type: selectOptionSchema,
  netValue: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  description: z.string().optional().nullable(),
})

export const NewInvestmentSchema = z.object({
  investedValue: z.string(),
  name: z.string(),
  type: selectOptionSchema,
  createdAt: z.date(),
  description: z.string().optional().nullable(),
})

export type InvestmentData = z.infer<typeof InvestmentSchema>
export type NewInvestmentData = z.infer<typeof NewInvestmentSchema>

export const InvestmentPositionSchema = z.object({
  investment: selectOptionSchema,
  netValue: z.string(),
  updatedAt: z.date(),
})


export type InvestmentPositionData = z.infer<typeof InvestmentPositionSchema>