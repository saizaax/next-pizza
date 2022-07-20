export const sortBy = (sort: string): { [x: string]: string } => {
  if (sort === "popularity") return {}
  if (sort === "price") return { price: "asc" }
  if (sort === "alphabet") return { title: "asc" }

  return {}
}
