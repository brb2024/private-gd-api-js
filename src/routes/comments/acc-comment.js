import { Router } from 'express'
import { getAccComments } from '../../handlers/comments/acc-comments.js'

const accCommentsRouter = Router()

accCommentsRouter.post('/', getAccComments)

export default accCommentsRouter
