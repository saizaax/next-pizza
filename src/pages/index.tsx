import type { NextPage } from "next"
import { motion } from "framer-motion"
import React from "react"
import Head from "next/head"
import s from "./home.module.scss"

import { categoriesConfig } from "../config/categories"

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
import { selectFilters } from "../redux/filters/selectors"
import { NothingFound } from "../components/NothingFound/NothingFound"
import { selectCart } from "../redux/cart/selectors"
import { getCartFromLocalStorage } from "../utils/getCartFromLocalStorage"
import { setCart } from "../redux/cart/slice"

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const isMounted = React.useRef(false)

  const { items: cartItems } = useSelector(selectCart)
  const { items, status } = useSelector(selectPizzaData)
  const { category, sort } = useSelector(selectFilters)

  React.useEffect(() => {
    dispatch(fetchPizzas({ sort, category }))
  }, [category, sort, dispatch])

  React.useEffect(() => {
    const cart = getCartFromLocalStorage()
    dispatch(setCart(cart))
  }, [dispatch])

  React.useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
    isMounted.current = true
  }, [cartItems])

  const categories = Object.entries(categoriesConfig).map(
    ([key, value], index) => (
      <CategoryButton
        key={index}
        type={category === value.query ? "active" : "inactive"}
        value={value.name}
        query={value.query}
      >
        {value.name}
      </CategoryButton>
    )
  )

  const pizzas = items.map((pizza: IPizza) => (
    <Product key={pizza.id} {...pizza} />
  ))

  const skeletons = Array.from({ length: 8 }).map((_, index) => (
    <ProductSkeleton key={index} />
  ))

  const animation = {
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  }

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
          <Sort />
        </div>
        <Heading>Пиццы</Heading>
        {status === Status.SUCCESS && !pizzas.length ? (
          <NothingFound />
        ) : status === Status.SUCCESS && pizzas.length ? (
          <motion.div
            className={s.pizza}
            variants={animation}
            initial="hidden"
            animate="visible"
          >
            {pizzas}
          </motion.div>
        ) : (
          <div className={s.pizza}>{skeletons}</div>
        )}
      </main>
    </div>
  )
}

export default Home
