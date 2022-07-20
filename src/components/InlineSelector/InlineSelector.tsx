import React, { FC } from "react"
import s from "./InlineSelector.module.scss"
import cn from "classnames"

type Props = {
  variants: string[]
  onChange: (value: string) => void
}

const InlineSelector: FC<Props> = ({ variants, onChange }) => {
  const [selected, setSelected] = React.useState(variants[0])

  React.useEffect(() => {
    onChange(selected)
  }, [selected])

  return (
    <div className={s.select}>
      {variants.map((variant) => (
        <button
          className={cn({ [s.active]: selected === variant })}
          onClick={() => setSelected(variant)}
          key={variant}
        >
          {variant}
        </button>
      ))}
    </div>
  )
}

export { InlineSelector }
