import { Router } from 'express'
import { getUserInfo20 } from '../../handlers/users/user-info20.js'

const userInfo20Router = Router()

userInfo20Router.post('/', getUserInfo20)

export default userInfo20Router
