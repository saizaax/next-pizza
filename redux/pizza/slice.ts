import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IPizza } from "../../utils/types/pizza.interface"
import { Status } from "../../utils/types/status.enum"
import { fetchPizzas } from "./actions"

interface IPizzaSliceState {
  items: IPizza[]
  status: Status
}

const initialState: IPizzaSliceState = {
  items: [],
  status: Status.LOADING
}

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    set(state: IPizzaSliceState, action: PayloadAction<IPizza[]>) {
      state.items = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING
      state.items = []
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR
      state.items = []
    })
  }
})

export const { set } = pizzaSlice.actions

export default pizzaSlice.reducer
