import React, { FC } from "react"
import s from "./Counter.module.scss"

import { IconButton } from "../IconButton/IconButton"

import addIcon from "../../public/icons/add.svg"
import removeIcon from "../../public/icons/remove.svg"

const Counter: FC = () => {
  const [counter, setCounter] = React.useState<number>(0)

  return (
    <div className={s.counter}>
      <IconButton
        icon={removeIcon}
        type="primary"
        onClick={() => setCounter((prev) => prev - 1)}
      />
      <span>{counter}</span>
      <IconButton
        icon={addIcon}
        type="primary"
        onClick={() => setCounter((prev) => prev + 1)}
      />
    </div>
  )
}

export { Counter }
