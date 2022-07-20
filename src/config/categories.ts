interface ICategories {
  [key: string]: {
    query: string
    name: string
  }
}

export const categoriesConfig: ICategories = {
  ALL: {
    name: "Все",
    query: "",
  },
  MEAT: {
    name: "Мясные",
    query: "meat",
  },
  VEGETARIAN: {
    name: "Вегетарианские",
    query: "vegetarian",
  },
  GRILLED: {
    name: "Гриль",
    query: "grilled",
  },
  SPICY: {
    name: "Острые",
    query: "spicy",
  },
  SEASONAL: {
    name: "Сезонные",
    query: "seasonal",
  },
}
