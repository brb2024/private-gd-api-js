import express from 'express'
import users20Router from './routes/users/users.js'
import userInfo20Router from './routes/users/user-info.js'
import accCommentsRouter from './routes/comments/acc-comment.js'

const app = express()
const PORT = 8081

// Middlewares
app.use(express.json())

// Routes
app.use('/getGJUsers20', users20Router)
app.use('/getGJUserInfo20', userInfo20Router)
app.use('/getGJAccountComments20', accCommentsRouter)

// Server -
app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`)
})
