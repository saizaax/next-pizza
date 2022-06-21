import React, { FC } from "react"
import s from "./Categories.module.scss"

import { CategoryButton } from "../CategoryButton/CategoryButton"

const Categories: FC = () => {
  return (
    <div className={s.categories}>
      <CategoryButton type="active">Все</CategoryButton>
      <CategoryButton type="inactive">Мясные</CategoryButton>
    </div>
  )
}

export { Categories }
