import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import type { Response, Request, NextFunction } from 'express'

const prisma = new PrismaClient()
const routerUsers = Router()

routerUsers.get('/users', async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).send({ data: users })
  } catch (e) {
    res.status(400).send({ message: 'There was an error' })
  }
})

routerUsers.get(
  '/users/:id',
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
      })
      res.status(200).send({ data: user })
    } catch (e) {
      res.status(400).send({ message: 'There was an error' })
    }
  }
)

routerUsers.get(
  '/users/:id/comments',
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const comments = await prisma.post.findMany({
        where: {
          userId: parseInt(req.params.id),
        },
      })
      res.status(200).send({ data: comments })
    } catch (e) {
      res.status(400).send({ message: 'There was an error' })
    }
  }
)
export default routerUsers
