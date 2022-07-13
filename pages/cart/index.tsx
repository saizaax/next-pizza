import type { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import React from "react"
import s from "./cart.module.scss"
import { useDispatch, useSelector } from "react-redux"

import { selectCart } from "../../redux/cart/selectors"
import { clear } from "../../redux/cart/slice"

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
  const dispatch = useDispatch()
  const { items } = useSelector(selectCart)

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.amount,
    0
  )

  const clearHandler = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clear())
    }
  }

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
          {totalCount ? (
            <div className={s.cart}>
              <div className={s.heading}>
                <Heading icon={cartIcon}>Корзина</Heading>
                <InlineButton icon={trashIcon} onClick={clearHandler}>Очистить корзину</InlineButton>
              </div>

              <div className={s.pizza}>
                {items.map((item: any) => (
                  <CartProduct key={item.id} {...item} />
                ))}
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
                <Link href="/">
                  <a>
                    <Button color="light" icon={arrowBackIcon}>
                      Вернуться назад
                    </Button>
                  </a>
                </Link>
                <Link href="/checkout">
                  <a>
                    <Button color="primary">Оплатить сейчас</Button>
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <div className={s.empty}>
              <EmptyCart />
              <Button color="dark">Вернуться назад</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Cart
