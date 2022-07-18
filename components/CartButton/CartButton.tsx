import React, { FC } from "react"
import Image from "next/image"
import s from "./CartButton.module.scss"

import cartIcon from "../../public/icons/cart-white.svg"
import { useSelector } from "react-redux"
import { selectCart } from "../../redux/cart/selectors"
import { ICartItem } from "../../utils/types/cartItem.interface"

const CartButton: FC = () => {
  const { total, items } = useSelector(selectCart)

  const totalAmount = items.reduce(
    (sum: number, item: ICartItem) => sum + item.amount,
    0
  )

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
        {totalAmount}
      </span>
    </button>
  )
}

export { CartButton }
