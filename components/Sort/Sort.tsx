import React, { FC, MouseEvent } from "react"
import Image from "next/image"
import s from "./Sort.module.scss"

import arrowIcon from "../../public/icons/arrow.svg"
import { SortPopup } from "../SortPopup/SortPopup"
import { selectFilters } from "../../redux/filters/selectors"
import { useSelector } from "react-redux"
import { sortConfig } from "../../config/sort"

const Sort: FC = () => {
  const { sort } = useSelector(selectFilters)

  const [showPopup, setShowPopup] = React.useState<boolean>(false)

  const handleMouseClick = (e: MouseEvent) => {
    setShowPopup((prev) => !prev)
  }

  return (
    <div className={s.sort}>
      <div className={s.container}>
        <Image src={arrowIcon} alt="" layout="fixed" width={10} height={18} />
        <p className={s.name}>Сортировка по:</p>
        <p className={s.param} onClick={handleMouseClick}>
          {sortConfig[sort.toUpperCase()].name}
        </p>
      </div>
      {showPopup ? <SortPopup handleClose={handleMouseClick} /> : null}
    </div>
  )
}

export { Sort }
