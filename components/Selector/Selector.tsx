import React, { FC } from 'react'
import s from './Selector.module.scss'

type Props = {
  children: React.ReactNode
}

const Selector: FC = () => {
  return (
    <div className={s.selector}>
      <button className={s.active}>популярности</button>
      <button>цене</button>
      <button>алфавиту</button>
    </div>
  )
}

export { Selector }