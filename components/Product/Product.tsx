import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"
import s from "./Product.module.scss"

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
      <Image src={preview} alt={title} width={260} height={260} />
      <div className={s.info}>
        <h3>{title}</h3>
        <div className={s.select}>
          <InlineSelector variants={["тонкое", "традиционное"]} />
          <InlineSelector variants={["26 см.", "30 см.", "40 см."]} />
        </div>
        <div className={s.price}>
          <h3>от {price} ₽</h3>
          <CounterButton>Добавить</CounterButton>
        </div>
      </div>
    </div>
  )
}

export { Product }
