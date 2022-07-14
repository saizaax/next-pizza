import type { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import s from "./home.module.scss"

import categoriesConfig from "../config/categories.json"

import examplePizza from "../public/images/example.jpeg"

import { Header } from "../components/Header/Header"
import { Sort } from "../components/Sort/Sort"
import { Heading } from "../components/Heading/Heading"
import { Categories } from "../components/Categories/Categories"
import { Product } from "../components/Product/Product"
import { CategoryButton } from "../components/CategoryButton/CategoryButton"

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Next Pizza 🍕</title>
        <meta name="description" content="Pizza App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.main}>
        <Header type="cart" />

        <div className={s.categories}>
          <Categories>
            {categoriesConfig.categories.map(({ name, url }) => (
              <Link href={url}>
                <a>
                  <CategoryButton type="inactive">{name}</CategoryButton>
                </a>
              </Link>
            ))}
          </Categories>

          <Sort value="популярности" />
        </div>

        <Heading>Все пиццы</Heading>

        <div className={s.pizza}>
          <Product preview={examplePizza} title="Ветчина и сыр" price={450} />
          <Product preview={examplePizza} title="Ветчина и сыр" price={450} />
          <Product preview={examplePizza} title="Ветчина и сыр" price={450} />
          <Product preview={examplePizza} title="Ветчина и сыр" price={450} />
          <Product preview={examplePizza} title="Ветчина и сыр" price={450} />
          <Product preview={examplePizza} title="Ветчина и сыр" price={450} />
          <Product preview={examplePizza} title="Ветчина и сыр" price={450} />
        </div>
      </main>
    </div>
  )
}

export default Home
