import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"
import s from "./CartProduct.module.scss"

import { Counter } from "../Counter/Counter"
import { IconButton } from "../IconButton/IconButton"

import deleteIcon from "../../public/icons/delete.svg"

type Props = {
  title: string
  type: string
  size: string
  price: number
  preview: StaticImageData
}

const CartProduct: FC<Props> = ({ title, type, size, price, preview }) => {
  return <div className={s.item}>
    <div className={s.info}>
      <Image src={preview} alt={title} width={75} height={75} />
      <div className={s.text}>
        <h3>{title}</h3>
        <p>{type}, {size}</p>
      </div>
    </div>

    <div className={s.quantity}>
      <Counter />
      <h2 className={s.price}>{price} ₽</h2>
      <IconButton icon={deleteIcon} type="secondary" />
    </div>
  </div>
}

export { CartProduct }
