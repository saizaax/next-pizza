import React, { FC } from "react"
import s from "./CategoryButton.module.scss"
import cn from "classnames"
import { useDispatch } from "react-redux"
import { setCategory } from "../../redux/filters/slice"

type Props = {
  children: React.ReactNode
  type: "active" | "inactive"
  value: string
  query: string
}

const CategoryButton: FC<Props> = ({ children, type, query }) => {
  const dispatch = useDispatch()

  return (
    <button
      className={cn(s.category, s[type])}
      onClick={() => dispatch(setCategory(query))}
    >
      {children}
    </button>
  )
}

export { CategoryButton }
