import querystring from 'querystring'
import clientConfig from '../../config/client-config.js'
import httpClient from '../../providers/http-client.js'
import userInfo20Config from '../../config/users/user-info20-config.js'

export async function getUserInfo20 (req, res) {
  const { userID } = req.body
  const postData = querystring.stringify(userInfo20Config(userID))
  const options = clientConfig(postData, '/database/getGJUserInfo20.php')

  try {
    const response = await httpClient(options, postData)
    res.send(response)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
