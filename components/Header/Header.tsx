import React, { FC } from "react"
import s from "./Header.module.scss"

import { Logo } from "../Logo/Logo"
import { CartButton } from "../CartButton/CartButton"

type Props = {
  type?: "cart"
}

const Header: FC<Props> = ({ type }) => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Logo />
        <div className={s.title}>
          <h1>Next Pizza</h1>
          <p>Лучшая пицца на планете</p>
        </div>
      </div>
      {type === "cart" ? <CartButton amount={3} total={1590} /> : null}
    </div>
  )
}

export { Header }
