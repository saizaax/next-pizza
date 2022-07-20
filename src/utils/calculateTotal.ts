import { ICartItem } from "./types/cartItem.interface"

export const calculateTotal = (items: ICartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.amount + sum, 0)
}
