import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import type { Response, Request, NextFunction } from 'express'

const prisma = new PrismaClient()
const routerPosts = Router()

routerPosts.get('/posts', async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const posts = await prisma.post.findMany()
    res.status(200).send({ data: posts })
  } catch (e) {
    res.status(400).send({ message: 'There was an error.' })
  }
})

routerPosts.get(
  '/posts/:id',
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const posts = await prisma.post.findUnique({
        where: {
          id: parseInt(req.params.id),
        },
      })
      res.status(200).send({ data: posts })
    } catch (e) {
      res.status(400).send({ message: 'There was an error.' })
    }
  }
)

routerPosts.get(
  '/posts/:id/comments',
  async (req: Request, res: Response, _next: NextFunction) => {
    try {
      const comments = await prisma.comment.findMany({
        where: {
          postId: parseInt(req.params.id),
        },
      })
      res.status(200).send({ data: comments })
    } catch (e) {
      console.log(e)
      res.status(400).send({ message: 'There was an error.' })
    }
  }
)

export default routerPosts
