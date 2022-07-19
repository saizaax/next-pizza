import axios from "axios"
import { pickBy } from "lodash"
import { config } from "../config/config"
import { IParams } from "../utils/types/params.interface"

import { IPizza } from "../utils/types/pizza.interface"

export const API = axios.create({
  baseURL: config.baseURL
})

export const getPizzas = async (params: IParams) => {
  const { data } = await API.get<IPizza[]>("/pizza", {
    params: pickBy(params, Boolean)
  })
  return data
}
