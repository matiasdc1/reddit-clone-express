import routerComments from './routes/comments'
import routerPosts from './routes/posts'
import routerUsers from './routes/users'

import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

app.use(routerComments)
app.use(routerPosts)
app.use(routerUsers)

export { app }
