import { IAddress } from '@/interfaces/Address'

export function formatAddress(address: IAddress) {
  const { city, number, state, street, complement } = address
  if (complement) {
    return `${street}, ${number}, ${complement}, ${city}, ${state}`
  }

  return `${street}, ${number}, ${city}, ${state}`
}
