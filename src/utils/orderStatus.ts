export enum OrderStatus {
  ACCEPTED = 'ACCEPTED',
  SENT = 'SENT',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
}

export const OrderStatusString = {
  ACCEPTED: 'Pedido criado',
  SENT: 'Pedido enviado',
  IN_TRANSIT: 'Pedido à caminho',
  DELIVERED: 'Pedido entregue',
} as Record<string, string>

export const OrderStepStatus = {
  ACCEPTED: 0,
  SENT: 1,
  IN_TRANSIT: 2,
  DELIVERED: 3,
} as Record<string, number>
