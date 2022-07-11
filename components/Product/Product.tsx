import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"
import s from "./Product.module.scss"

import cartIcon from "../../public/icons/cart-primary.svg"

import { CounterButton } from "../CounterButton/CounterButton"
import { InlineSelector } from "../InlineSelector/InlineSelector"

type Props = {
  title: string
  preview: StaticImageData
  price: number
}

const Product: FC<Props> = ({ title, preview, price }) => {
  return (
    <div className={s.product}>
      <span className={s.preview}>
        <Image src={preview} alt={title} />
      </span>
      <div className={s.info}>
        <h3>{title}</h3>
        <div className={s.select}>
          <InlineSelector variants={["тонкое", "традиционное"]} />
          <InlineSelector variants={["26см.", "30см.", "40см."]} />
        </div>
        <div className={s.price}>
          <h3>{price} ₽</h3>
          <CounterButton icon={cartIcon}>Добавить</CounterButton>
        </div>
      </div>
    </div>
  )
}

export { Product }
