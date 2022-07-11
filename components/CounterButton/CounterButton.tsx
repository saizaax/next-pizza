import React, { FC } from "react"
import Image from "next/image"
import s from "./CounterButton.module.scss"

type Props = {
  children: React.ReactNode
  icon?: string
  onClick?: () => void
}

const CounterButton: FC<Props> = ({ icon, children }) => {
  const [count, setCount] = React.useState(0)

  return (
    <button className={s.btn} onClick={() => setCount((prev) => prev + 1)}>
      {icon ? (
        <span className={s.icon}>
          <Image src={icon} alt="" />
        </span>
      ) : null}{" "}
      <span className={s.text}>{children}</span>{" "}
      <span className={s.count}>{count}</span>
    </button>
  )
}

export { CounterButton }
