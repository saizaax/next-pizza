import React, { FC } from "react"
import Image from "next/image"
import s from "./CartButton.module.scss"

import cartIcon from "../../public/icons/cart-white.svg"

type Props = {
  onClick?: () => void
  total: number
  amount: number
}

const CartButton: FC<Props> = ({ total, amount }) => {
  return (
    <button className={s.cart}>
      <span className={s.total}>{total} ₽</span>
      <hr />
      <span className={s.amount}>
        <Image
          src={cartIcon}
          alt="cart"
          width={18}
          height={18}
          layout="fixed"
        />{" "}
        {amount}
      </span>
    </button>
  )
}

export { CartButton }
