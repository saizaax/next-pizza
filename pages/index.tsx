import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import s from "./home.module.scss"

import categoriesConfig from "../config/categories.json"

import { Header } from "../components/Header/Header"
import { Sort } from "../components/Sort/Sort"
import { Heading } from "../components/Heading/Heading"
import { Categories } from "../components/Categories/Categories"
import { Product } from "../components/Product/Product"
import { CategoryButton } from "../components/CategoryButton/CategoryButton"
import { fetchPizzas } from "../redux/pizza/actions"
import { useAppDispatch } from "../redux/store"
import { useSelector } from "react-redux"
import { selectPizzaData } from "../redux/pizza/selectors"
import { IPizza } from "../utils/types/pizza.interface"
import { ProductSkeleton } from "../components/ProductSkeleton/ProductSkeleton"
import { Status } from "../utils/types/status.enum"

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { items, status } = useSelector(selectPizzaData)

  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [])

  const categories = categoriesConfig.categories.map(({ name }, index) => (
    <CategoryButton key={index} type="inactive">
      {name}
    </CategoryButton>
  ))

  const pizzas = items.map((pizza: IPizza) => (
    <Product key={pizza.id} {...pizza} />
  ))

  const skeletons = Array.from({ length: 6 }).map((_, index) => (
    <ProductSkeleton key={index} />
  ))

  return (
    <div className={s.container}>
      <Head>
        <title>Next Pizza 🍕</title>
        <meta name="description" content="Pizza App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Header type="cart" />
        <div className={s.categories}>
          <Categories>{categories}</Categories>
          <Sort value="популярности" />
        </div>
        <Heading>Все пиццы</Heading>
        <div className={s.pizza}>
          {status === Status.SUCCESS ? pizzas : skeletons}
        </div>
      </main>
    </div>
  )
}

export default Home
