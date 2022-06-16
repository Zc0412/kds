/**
 * 订单紧急程度
 */
export type OrderCardLevel = {
  level?: 'low' | 'middle' | 'high';
}

export type OrderCardStatus={
  status?: 'done' | 'doing'
}