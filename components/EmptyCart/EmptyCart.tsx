import Image from "next/image"
import React, { FC } from "react"
import s from "./EmptyCart.module.scss"

import emptyCart from "../../public/illustrations/empty-cart.svg"

const EmptyCart: FC = () => {
  return (
    <div className={s.empty}>
      <div className={s.info}>
        <h1>Корзина пустая 😕</h1>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
      </div>
      <Image src={emptyCart} alt="Empty Cart" />
    </div>
  )
}

export { EmptyCart }
