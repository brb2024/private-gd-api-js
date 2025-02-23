import { Router } from 'express'
import { getLevelComments } from '../../handlers/comments/level-comments.js'

const lvlCommentsRouter = Router()

lvlCommentsRouter.post('/', getLevelComments)

export default lvlCommentsRouter
