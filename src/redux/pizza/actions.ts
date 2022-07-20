import { createAsyncThunk } from "@reduxjs/toolkit"
import { getPizzas } from "../../api/pizza"
import { IParams } from "../../utils/types/params.interface"
import { IPizza } from "../../utils/types/pizza.interface"

export const fetchPizzas = createAsyncThunk<IPizza[], IParams>(
  "pizza/fetchPizzas",
  async (params) => {
    return await getPizzas(params)
  }
)
