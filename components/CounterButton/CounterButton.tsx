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
      {icon ? <Image src={icon} alt="" width={12} height={12} /> : null}{" "}
      {children} <span>{count}</span>
    </button>
  )
}

export { CounterButton }
