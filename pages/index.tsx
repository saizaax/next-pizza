import type { NextPage } from "next"
import Head from "next/head"
import s from "./index.module.scss"

import cartIcon from "../public/icons/cart-black.svg"
import arrowBackIcon from "../public/icons/arrow-back.svg"
import addIcon from "../public/icons/add.svg"
import removeIcon from "../public/icons/remove.svg"
import deleteIcon from "../public/icons/delete.svg"
import trashIcon from "../public/icons/trash.svg"

import examplePizza from "../public/images/example.jpeg"

import { Header } from "../components/Header/Header"
import { Button } from "../components/Button/Button"
import { Selector } from "../components/Selector/Selector"
import { Sort } from "../components/Sort/Sort"
import { CartButton } from "../components/CartButton/CartButton"
import { Heading } from "../components/Heading/Heading"
import { Categories } from "../components/Categories/Categories"
import { Total } from "../components/Total/Total"
import { IconButton } from "../components/IconButton/IconButton"
import { Counter } from "../components/Counter/Counter"
import { InlineButton } from "../components/InlineButton/InlineButton"
import { EmptyCart } from "../components/EmptyCart/EmptyCart"
import { CounterButton } from "../components/CounterButton/CounterButton"
import { InlineSelector } from "../components/InlineSelector/InlineSelector"
import { CartProduct } from "../components/CartProduct/CartProduct"
import { Product } from "../components/Product/Product"

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
        <Button color="light" icon={arrowBackIcon}>
          Вернуться назад
        </Button>

        <Selector />

        <Sort value="популярности" />

        <CartButton total={520} amount={3} />

        <Heading>Все пиццы</Heading>
        <Heading icon={cartIcon}>Корзина</Heading>

        <Categories />

        <Total value={3} metric="шт." type="default">
          Всего пицц
        </Total>
        <Total value={900} metric="₽" type="accent">
          Сумма заказа
        </Total>

        <IconButton icon={addIcon} type="primary" />
        <IconButton icon={removeIcon} type="primary" />
        <IconButton icon={deleteIcon} type="secondary" />

        <Counter />

        <InlineButton icon={trashIcon}>Очистить корзину</InlineButton>

        <CounterButton icon={addIcon}>Добавить</CounterButton>

        <InlineSelector variants={["26 см.", "30 см.", "40 см."]} />

        <CartProduct
          title="Сырный цыпленок"
          price={900}
          preview={examplePizza}
          type="тонкое тесто"
          size="26 см."
        />

        <Product title="Сырный цыпленок" price={900} preview={examplePizza} />

        <EmptyCart />
      </main>
    </div>
  )
}

export default Home
