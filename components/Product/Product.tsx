import Image from "next/image"
import { motion } from "framer-motion"
import React, { FC } from "react"
import s from "./Product.module.scss"

import cartIcon from "../../public/icons/cart-primary.svg"

import { CounterButton } from "../CounterButton/CounterButton"
import { InlineSelector } from "../InlineSelector/InlineSelector"
import { useDispatch, useSelector } from "react-redux"
import { IPizza } from "../../utils/types/pizza.interface"
import { add } from "../../redux/cart/slice"
import { Size, Type } from "../../utils/types/pizza.enum"
import { selectCartItemById } from "../../redux/cart/selectors"
import { ICartItem } from "../../utils/types/cartItem.interface"
import animation from "./Product.motion"

type Props = {
  id: string
  title: string
  price: number
  preview: string
}

const Product: FC<Props> = ({ id, title, preview, price: initialPrice }) => {
  const dispatch = useDispatch()
  const cartItem: ICartItem | undefined = useSelector(selectCartItemById(id))

  const [amount, setAmount] = React.useState<number>(
    cartItem ? cartItem.amount : 0
  )
  const [size, setSize] = React.useState<string>(Size.SMALL)
  const [type, setType] = React.useState<string>(Type.TRADITIONAL)
  const [price, setPrice] = React.useState<number>(initialPrice)

  const handleAdd = () => {
    setAmount((prev) => prev + 1)
    dispatch(add({ id, title, type, size, price, amount, preview }))
  }

  React.useEffect(() => {
    if (size === Size.MEDIUM) setPrice(initialPrice + 180)
    else if (size === Size.LARGE) setPrice(initialPrice + 390)
    else setPrice(initialPrice)
  }, [size])

  return (
    <motion.div className={s.product} variants={animation}>
      <span className={s.preview}>
        <Image src={preview} alt={title} layout="fill" />
      </span>
      <div className={s.info}>
        <h3>{title}</h3>
        <div className={s.select}>
          <InlineSelector
            variants={[Type.THIN, Type.TRADITIONAL]}
            onChange={(type) => setType(type)}
          />
          <InlineSelector
            variants={[Size.SMALL, Size.MEDIUM, Size.LARGE]}
            onChange={(size) => setSize(size)}
          />
        </div>
        <div className={s.price}>
          <h3>{price} ₽</h3>
          <CounterButton icon={cartIcon} onClick={handleAdd} amount={amount}>
            Добавить
          </CounterButton>
        </div>
      </div>
    </motion.div>
  )
}

export { Product }
