import React, { FC } from "react"
import s from "./Counter.module.scss"

import { IconButton } from "../IconButton/IconButton"

import addIcon from "../../public/icons/add.svg"
import removeIcon from "../../public/icons/remove.svg"
import { useDispatch } from "react-redux"
import { add, subtract } from "../../redux/cart/slice"

type Props = {
  id: string
  title: string
  price: number
  preview: string
  type: string
  size: string
  amount: number
}

const Counter: FC<Props> = ({
  id,
  title,
  type,
  size,
  price,
  amount,
  preview
}) => {
  const dispatch = useDispatch()

  const handleAdd = () =>
    dispatch(add({ id, title, type, size, price, amount, preview }))
  const handleRemove = () => dispatch(subtract(id))

  return (
    <div className={s.counter}>
      <IconButton
        icon={removeIcon}
        type="primary"
        onClick={amount > 1 ? handleRemove : () => {}}
      />
      <span>{amount}</span>
      <IconButton icon={addIcon} type="primary" onClick={handleAdd} />
    </div>
  )
}

export { Counter }
