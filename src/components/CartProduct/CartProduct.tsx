import Image, { StaticImageData } from "next/image"
import React, { FC } from "react"
import s from "./CartProduct.module.scss"

import { Counter } from "../Counter/Counter"
import { IconButton } from "../IconButton/IconButton"

import deleteIcon from "../../../public/icons/delete.svg"
import { useDispatch } from "react-redux"
import { add, remove, subtract } from "../../redux/cart/slice"

type Props = {
  id: string
  title: string
  price: number
  preview: string
  type: string
  size: string
  amount: number
}

const CartProduct: FC<Props> = (props) => {
  const dispatch = useDispatch()
  const { id, title, type, size, price, preview } = props

  const handleRemove = () => dispatch(remove(id))

  return (
    <div className={s.item}>
      <div className={s.info}>
        <Image src={preview} alt={title} width={75} height={75} />
        <div className={s.text}>
          <h3>{title}</h3>
          <p>
            {type}, {size}
          </p>
        </div>
      </div>

      <div className={s.quantity}>
        <Counter {...props} />
        <h2 className={s.price}>{price} ₽</h2>
        <IconButton icon={deleteIcon} type="secondary" onClick={handleRemove} />
      </div>
    </div>
  )
}

export { CartProduct }
