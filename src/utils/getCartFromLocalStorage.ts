import { calculateTotal } from "./calculateTotal"
import { ICartItem } from "./types/cartItem.interface"

export const getCartFromLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    const data = localStorage.getItem("cart")
    const items = data ? JSON.parse(data) : []
    const total = calculateTotal(items)

    return {
      items: items as ICartItem[],
      total,
    }
  }

  return {
    items: [],
    total: 0,
  }
}
