import querystring from 'querystring'
import clientConfig from '../../config/client-config.js'
import httpClient from '../../providers/http-client.js'
import usersConfig from '../../config/users/users.config.js'

export async function getUsers20 (req, res) {
  const { userName } = req.body
  const postData = querystring.stringify(usersConfig(userName))
  const options = clientConfig(postData, '/database/getGJUsers20.php')

  try {
    const response = await httpClient(options, postData)
    res.send(response)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
