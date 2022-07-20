import React, { FC } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import s from "./NothingFound.module.scss"

import animation from "./NothingFound.motion"

import nothingFound from "../../../public/illustrations/nothing-found.svg"

const NothingFound: FC = () => {
  return (
    <motion.div
      className={s.nothing}
      variants={animation}
      initial="hidden"
      animate="visible"
    >
      <div className={s.info}>
        <h1>Ничего не найдено 🤔</h1>
        <p>
          Попробуйте изменить критерии поиска
          <br />
          или попробуйте позже.
        </p>
      </div>
      <Image src={nothingFound} alt="Nothing Found" />
    </motion.div>
  )
}

export { NothingFound }
