import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { calculateTotal } from "../../utils/calculateTotal"

import { ICartItem } from "../../utils/interfaces/cartItem.interface"

interface CartSliceState {
  items: ICartItem[]
  total: number
}

const initialState: CartSliceState = {
  items: [{
    id: "1",
    title: "Ветчина и сыр",
    price: 990,
    preview: "https://dodopizza-a.akamaihd.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_584x584.jpeg",
    amount: 1,
  }],
  total: 990
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state: CartSliceState, action: PayloadAction<ICartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)

      if (findItem) findItem.amount++
      else state.items.push({ ...action.payload, amount: 1 })

      state.total = calculateTotal(state.items)
    },
    subtract(state: CartSliceState, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)

      if (findItem) findItem.amount--

      state.total = calculateTotal(state.items)
    },
    remove(state: CartSliceState, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.total = calculateTotal(state.items)
    },
    clear(state: CartSliceState) {
      state.items = []
      state.total = 0
    }
  }
})

export const { add, subtract, remove, clear } = cartSlice.actions

export default cartSlice.reducer
