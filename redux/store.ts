import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import cart from "./cart/slice"
import pizza from "./pizza/slice"
import filters from "./filters/slice"

export const store = configureStore({
  reducer: {
    cart,
    pizza,
    filters
  }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
