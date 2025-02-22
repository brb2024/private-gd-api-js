import querystring from 'querystring'
import clientConfig from '../../config/client-config.js'
import httpClient from '../../providers/http-client.js'
import userInfoConfig from '../../config/users/user-info.config.js'

export async function getUserInfo20 (req, res) {
  const { accountID } = req.body
  const postData = querystring.stringify(userInfoConfig(accountID))
  const options = clientConfig(postData, '/database/getGJUserInfo20.php')

  try {
    const response = await httpClient(options, postData)
    res.send(response)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
