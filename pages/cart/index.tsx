import type { NextPage } from "next"
import Head from "next/head"
import React from "react"
import s from "./cart.module.scss"

import examplePizza from "../../public/images/example.jpeg"

import cartIcon from "../../public/icons/cart-black.svg"
import trashIcon from "../../public/icons/trash.svg"
import arrowBackIcon from "../../public/icons/arrow-back.svg"

import { CartProduct } from "../../components/CartProduct/CartProduct"
import { Header } from "../../components/Header/Header"
import { Heading } from "../../components/Heading/Heading"
import { InlineButton } from "../../components/InlineButton/InlineButton"
import { Total } from "../../components/Total/Total"
import { Button } from "../../components/Button/Button"
import { EmptyCart } from "../../components/EmptyCart/EmptyCart"

const Cart: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Корзина 🍕</title>
        <meta name="description" content="Pizza App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Header />

        <div className={s.container}>
          <div className={s.cart}>
            <div className={s.heading}>
              <Heading icon={cartIcon}>Корзина</Heading>
              <InlineButton icon={trashIcon}>Очистить корзину</InlineButton>
            </div>

            <div className={s.pizza}>
              <CartProduct
                preview={examplePizza}
                title="Ветчина и сыр"
                price={450}
                type="стандартная"
                size="средняя"
              />
              <CartProduct
                preview={examplePizza}
                title="Ветчина и сыр"
                price={450}
                type="стандартная"
                size="средняя"
              />
              <CartProduct
                preview={examplePizza}
                title="Ветчина и сыр"
                price={450}
                type="стандартная"
                size="средняя"
              />
              <CartProduct
                preview={examplePizza}
                title="Ветчина и сыр"
                price={450}
                type="стандартная"
                size="средняя"
              />
              <CartProduct
                preview={examplePizza}
                title="Ветчина и сыр"
                price={450}
                type="стандартная"
                size="средняя"
              />
              <CartProduct
                preview={examplePizza}
                title="Ветчина и сыр"
                price={450}
                type="стандартная"
                size="средняя"
              />
            </div>

            <div className={s.total}>
              <Total type="default" value={3} metric="шт.">
                Всего пицц
              </Total>
              <Total type="accent" value={900} metric="₽">
                Сумма заказа
              </Total>
            </div>

            <div className={s.actions}>
              <Button color="light" icon={arrowBackIcon}>
                Вернуться назад
              </Button>
              <Button color="primary">Оплатить сейчас</Button>
            </div>
          </div>
          {/* <div className={s.empty}>
            <EmptyCart />
            <Button color="dark">Вернуться назад</Button>
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default Cart
