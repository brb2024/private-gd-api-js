import { Router } from 'express'
import { getUsers20 } from '../../handlers/users/users20.js'

const users20Router = Router()

users20Router.post('/', getUsers20)

export default users20Router
