import React, { FC } from "react"
import s from "./Total.module.scss"

type Props = {
  type: "accent" | "default"
  children: React.ReactNode
  value: number
  metric: string
}

const Total: FC<Props> = ({ children, value, type, metric }) => {
  return (
    <div className={s.total}>
      <p>
        {children}:{" "}
        <span className={s[type]}>
          {value} {metric}
        </span>
      </p>
    </div>
  )
}

export { Total }
