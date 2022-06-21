import type { NextPage } from "next"
import Head from "next/head"
import s from "./index.module.scss"

import cartIcon from "../public/assets/cart-black.svg"

import { Header } from "../components/Header/Header"
import { Button } from "../components/Button/Button"
import { Selector } from "../components/Selector/Selector"
import { Sort } from "../components/Sort/Sort"
import { CartButton } from "../components/CartButton/CartButton"
import { Heading } from "../components/Heading/Heading"
import { CategoryButton } from "../components/CategoryButton/CategoryButton"
import { Categories } from "../components/Categories/Categories"
import { Total } from "../components/Total/Total"

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Next Pizza 🍕</title>
        <meta name="description" content="Pizza App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Header />
        <Button color="primary">Купить</Button>
        <Button color="dark">Купить</Button>
        <Button color="light">Купить</Button>

        <Selector />

        <Sort value="популярности" />

        <CartButton total={520} amount={3} />

        <Heading>Все пиццы</Heading>
        <Heading icon={cartIcon}>Корзина</Heading>

        <Categories />

        <Total value={3} metric="шт." type="default">Всего пицц</Total>
        <Total value={900} metric="₽" type="accent">Сумма заказа</Total>
      </main>
    </div>
  )
}

export default Home
