import React, { FC } from "react"
import Image from "next/image"
import s from "./InlineButton.module.scss"

type Props = {
  children: React.ReactNode
  icon: string
}

const InlineButton: FC<Props> = ({ children, icon }) => {
  return (
    <button className={s.btn}>
      {icon ? <Image src={icon} alt="" /> : null} {children}
    </button>
  )
}

export { InlineButton }
