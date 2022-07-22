import React, { FC } from "react"
import s from "./Header.module.scss"

import { Logo } from "../Logo/Logo"
import { CartButton } from "../CartButton/CartButton"
import Link from "next/link"

type Props = {
  type?: "cart"
}

const Header: FC<Props> = ({ type }) => {
  return (
    <div className={s.container}>
      <Link href="/">
        <a>
          <div className={s.logo}>
            <Logo />
            <div className={s.title}>
              <h1>Next Pizza</h1>
              <p>Лучшая пицца на планете 🧡</p>
            </div>
          </div>
        </a>
      </Link>
      {type === "cart" ? (
        <Link href="/cart">
          <a>
            <CartButton />
          </a>
        </Link>
      ) : null}
    </div>
  )
}

export { Header }
