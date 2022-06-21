import React, { FC } from "react"
import s from "./CategoryButton.module.scss"
import cn from "classnames"

type Props = {
  children: React.ReactNode
  type: "active" | "inactive"
}

const CategoryButton: FC<Props> = ({ children, type }) => {
  return <button className={cn(s.category, s[type])}>{children}</button>
}

export { CategoryButton }
