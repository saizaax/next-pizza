import { createAsyncThunk } from "@reduxjs/toolkit"
import { getPizzas } from "../../api/pizza"
import { IPizza } from "../../utils/types/pizza.interface"

export const fetchPizzas = createAsyncThunk<IPizza[]>(
  "pizza/fetchPizzas",
  async () => {
    return await getPizzas()
  }
)
