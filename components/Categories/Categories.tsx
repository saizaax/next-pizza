import React, { FC } from "react"
import s from "./Categories.module.scss"

type Props = {
  children: React.ReactNode
}

const Categories: FC<Props> = ({ children }) => {
  return <div className={s.categories}>{children}</div>
}

export { Categories }
