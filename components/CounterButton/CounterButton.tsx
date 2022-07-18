import React, { FC } from "react"
import Image from "next/image"
import s from "./CounterButton.module.scss"

type Props = {
  children: React.ReactNode
  amount: number
  icon?: string
  onClick?: () => void
}

const CounterButton: FC<Props> = ({ icon, children, onClick, amount }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      {icon ? (
        <span className={s.icon}>
          <Image src={icon} alt="" />
        </span>
      ) : null}{" "}
      <span className={s.text}>{children}</span>{" "}
      {amount > 0 ? <span className={s.count}>{amount}</span> : null}
    </button>
  )
}

export { CounterButton }
