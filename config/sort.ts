interface ISort {
  [key: string]: {
    query: string
    name: string
  }
}

export const sortConfig: ISort = {
  POPULARITY: {
    name: "популярности",
    query: "popularity"
  },
  PRICE: {
    name: "цене",
    query: "price"
  },
  ALPHABET: {
    name: "алфавиту",
    query: "alphabet"
  }
}
