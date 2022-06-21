import React, { FC } from "react"
import Image from "next/image"
import s from "./CartButton.module.scss"

import cartIcon from "../../public/assets/cart-white.svg"

type Props = {
  onClick?: () => void
  total: number
  amount: number
}

const CartButton: FC<Props> = ({ total, amount }) => {
  return (
    <button className={s.cart}>
      <span>{total} ₽</span>
      <hr />
      <span>
        <Image src={cartIcon} alt="cart" /> {amount}
      </span>
    </button>
  )
}

export { CartButton }
