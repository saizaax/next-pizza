import type { NextPage } from "next"
import Head from "next/head"
import s from "./index.module.scss"

import { Header } from "../components/Header/Header"
import { Button } from "../components/Button/Button"

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Next.js Pizza</title>
        <meta name="description" content="Pizza App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Header />
        <Button color="primary">Купить</Button>
        <Button color="dark">Купить</Button>
        <Button color="light">Купить</Button>
      </main>
    </div>
  )
}

export default Home
