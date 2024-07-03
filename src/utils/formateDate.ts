import { format } from 'date-fns'

export function formatDateHour(date: string) {
  return format(date, 'dd/MM/yyyy HH:mm')
}
