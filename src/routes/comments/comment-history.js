import { Router } from 'express'
import { getCommentHist } from '../../handlers/comments/comment-history.js'

const commentHistRouter = Router()

commentHistRouter.post('/', getCommentHist)

export default commentHistRouter
