import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { sortConfig } from "../../config/sort"

interface IPizzaSliceState {
  category: string
  sort: string
}

const initialState: IPizzaSliceState = {
  category: "",
  sort: sortConfig.POPULARITY.query
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state: IPizzaSliceState, action: PayloadAction<string>) {
      state.category = action.payload
    },
    setSort(state: IPizzaSliceState, action: PayloadAction<string>) {
      state.sort = action.payload
    }
  }
})

export const { setCategory, setSort } = filtersSlice.actions

export default filtersSlice.reducer
