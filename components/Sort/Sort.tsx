import React, { FC } from "react"
import Image from "next/image"
import s from "./Sort.module.scss"

import arrowIcon from "../../public/assets/arrow.svg"

type Props = {
  value: string
}

const Sort: FC<Props> = ({ value }) => {
  return (
    <div className={s.container}>
      <Image src={arrowIcon} alt="" />
      <p className={s.sort}>Сортировка по:</p>
      <p className={s.param}>{value}</p>
    </div>
  )
}

export { Sort }
