import React, { FC } from "react"
import cn from "classnames"
import s from "./Button.module.scss"

type Props = {
  children: React.ReactNode
  color: "primary" | "light" | "dark"
  icon?: React.ReactNode
}

const Button: FC<Props> = ({ icon, color, children }) => {
  return (
    <button className={cn(s.btn, s[color])}>
      {icon} {children}
    </button>
  )
}

export { Button }
