import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { calculateTotal } from "../../utils/calculateTotal"

import { ICartItem } from "../../utils/types/cartItem.interface"

interface ICartSliceState {
  items: ICartItem[]
  total: number
}

const initialState: ICartSliceState = {
  items: [],
  total: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state: ICartSliceState, action: PayloadAction<ICartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)

      if (findItem) findItem.amount++
      else state.items.push({ ...action.payload, amount: 1 })

      state.total = calculateTotal(state.items)
    },
    subtract(state: ICartSliceState, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload)

      if (findItem) findItem.amount--

      state.total = calculateTotal(state.items)
    },
    remove(state: ICartSliceState, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.total = calculateTotal(state.items)
    },
    clear(state: ICartSliceState) {
      state.items = []
      state.total = 0
    }
  }
})

export const { add, subtract, remove, clear } = cartSlice.actions

export default cartSlice.reducer
