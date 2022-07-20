import React, { FC } from "react"
import Image from "next/image"
import s from "./InlineButton.module.scss"

type Props = {
  children: React.ReactNode
  icon: string
  onClick?: () => void
}

const InlineButton: FC<Props> = ({ children, icon, onClick }) => {
  return (
    <button className={s.btn} onClick={onClick}>
      {icon ? (
        <span className={s.icon}>
          <Image src={icon} alt="" layout="fixed" width={20} height={20} />
        </span>
      ) : null}{" "}
      {children}
    </button>
  )
}

export { InlineButton }
