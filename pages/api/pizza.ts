import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { sortBy } from "../../utils/sortBy"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") return await create(req, res)
  if (req.method === "GET") {
    const { category } = req.query
    if (category) return await getByCategory(req, res)
    else return await getAll(req, res)
  } else
    res.status(404).json({ error: "Not found. This route does not exist." })
}

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body

  body.categories = body.categories.map((category: string) => ({
    category: {
      connectOrCreate: {
        where: {
          name: category
        },
        create: {
          name: category
        }
      }
    }
  }))

  try {
    const newEntry = await prisma.pizza.create({
      data: {
        title: body.title,
        price: body.price,
        preview: body.preview,
        categories: {
          create: body.categories
        }
      },
      include: {
        categories: true
      }
    })
    return res.status(200).json(newEntry)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const getAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const sort = req.query.sort.toString()
  const sortQuery = sortBy(sort)

  try {
    const pizza = await prisma.pizza
      .findMany({
        orderBy: sortQuery,
        include: {
          categories: {
            select: {
              category: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      })
      .then((pizzas) =>
        pizzas.map((pizza) => ({
          ...pizza,
          categories: pizza.categories.map((category) => category.category.name)
        }))
      )

    return res.status(200).json(pizza)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

const getByCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const category = req.query.category.toString()
  const sort = req.query.sort.toString()

  const sortQuery = sortBy(sort)

  try {
    const pizza = await prisma.pizza
      .findMany({
        orderBy: sortQuery,
        where: {
          categories: {
            some: {
              category: {
                name: category
              }
            }
          }
        },
        include: {
          categories: {
            select: {
              category: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      })
      .then((pizzas) =>
        pizzas.map((pizza) => ({
          ...pizza,
          categories: pizza.categories.map((category) => category.category.name)
        }))
      )

    return res.status(200).json(pizza)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
