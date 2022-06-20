import React, { FC } from 'react'
import s from "./Header.module.scss"

import { Logo } from '../Logo/Logo'

const Header: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo />
        <div className={s.title}>
          <h1>Next Pizza</h1>
          <p>Лучшая пицца на планете</p>
        </div>
      </div>
    </div>
  )
}

export { Header }