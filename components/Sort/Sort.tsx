import React, { FC, MouseEvent } from "react"
import Image from "next/image"
import s from "./Sort.module.scss"

import arrowIcon from "../../public/icons/arrow.svg"
import { SortPopup } from "../SortPopup/SortPopup"

type Props = {
  value: string
}

const Sort: FC<Props> = ({ value }) => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false)

  const handleMouseClick = (e: MouseEvent<HTMLParagraphElement>) => {
    setShowPopup(prev => !prev)
  }

  return (
    <div className={s.sort}>
      <div className={s.container}>
        <Image src={arrowIcon} alt="" />
        <p className={s.name}>Сортировка по:</p>
        <p
          className={s.param}
          onClick={handleMouseClick}
        >
          {value}
        </p>
      </div>
      {showPopup ? <SortPopup /> : null}
    </div>
  )
}

export { Sort }
