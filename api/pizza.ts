import axios from "axios"
import config from "../config/config.json"

import { IPizza } from "../utils/types/pizza.interface"

export const API = axios.create({
  baseURL: config.baseURL
})

export const getPizzas = async () => {
  const { data } = await API.get<IPizza[]>("/pizza")
  return data
}
