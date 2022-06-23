import React, { FC } from "react"
import Image from "next/image"
import s from "./IconButton.module.scss"
import cn from "classnames"

type Props = {
  icon: string
  type: "primary" | "secondary"
  onClick?: () => void
}

const IconButton: FC<Props> = ({ icon, type, onClick }) => {
  return (
    <button className={cn(s.btn, s[type])} onClick={onClick}>
      {icon ? <Image src={icon} alt="" /> : null}
    </button>
  )
}

export { IconButton }
