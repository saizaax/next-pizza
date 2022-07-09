import React, { FC } from 'react'
import s from './SortPopup.module.scss'

type Props = {
  children?: React.ReactNode
}

const SortPopup: FC<Props> = () => {
  return (
    <div className={s.selector}>
      <button className={s.active}>популярности</button>
      <button>цене</button>
      <button>алфавиту</button>
    </div>
  )
}

export { SortPopup }