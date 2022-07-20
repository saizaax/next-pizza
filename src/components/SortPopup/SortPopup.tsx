import React, { FC, MouseEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectFilters } from "../../redux/filters/selectors"
import { setSort } from "../../redux/filters/slice"
import s from "./SortPopup.module.scss"

import { sortConfig } from "../../config/sort"

type Props = {
  handleClose: (e: MouseEvent) => void
}

const SortPopup: FC<Props> = ({ handleClose }) => {
  const dispatch = useDispatch()
  const { sort } = useSelector(selectFilters)

  const handleClick = (e: MouseEvent, sort: string) => {
    dispatch(setSort(sort))
    handleClose(e)
  }

  const variants = Object.entries(sortConfig).map(([key, value]) => (
    <button
      key={key}
      className={sort === value.query ? s.active : ""}
      onClick={(e) => handleClick(e, value.query)}
    >
      {value.name}
    </button>
  ))

  return <div className={s.selector}>{variants}</div>
}

export { SortPopup }
