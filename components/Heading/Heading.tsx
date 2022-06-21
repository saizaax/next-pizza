import Image from "next/image"
import React, { FC } from "react"
import s from "./Heading.module.scss"

type Props = {
  icon?: string
  children: React.ReactNode
}

const Heading: FC<Props> = ({ icon, children }) => {
  return (
    <h1 className={s.heading}>
      {icon ? <Image src={icon} alt="" /> : null} {children}
    </h1>
  )
}

export { Heading }
