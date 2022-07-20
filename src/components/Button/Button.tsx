import React, { FC } from "react"
import Image from "next/image"
import cn from "classnames"
import s from "./Button.module.scss"

type Props = {
  children: React.ReactNode
  color: "primary" | "light" | "dark"
  icon?: string
}

const Button: FC<Props> = ({ icon, color, children }) => {
  return (
    <button className={cn(s.btn, s[color])}>
      {icon ? <Image src={icon} alt="" /> : null} {children}
    </button>
  )
}

export { Button }
