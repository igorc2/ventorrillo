import { format } from 'date-fns'

export function formatDate(inputDate: string | Date): string {
  return format(new Date(inputDate), "EEE, do MMMM yyyy")
}

export function formattedToday(): string {
  const today = new Date()
  return formatDate(today)
}
