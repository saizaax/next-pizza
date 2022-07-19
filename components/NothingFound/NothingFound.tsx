import React, { FC } from 'react'
import Image from 'next/image'
import s from './NothingFound.module.scss'

import nothingFound from '../../public/illustrations/nothing-found.svg'

const NothingFound: FC = () => {
  return (
    <div className={s.nothing}>
      <div className={s.info}>
        <h1>Ничего не найдено 🤔</h1>
        <p>
          Попробуйте изменить критерии поиска
          <br />
          или попробуйте позже.
        </p>
      </div>
      <Image src={nothingFound} alt="Nothing Found" />
    </div>
  )
}

export { NothingFound }