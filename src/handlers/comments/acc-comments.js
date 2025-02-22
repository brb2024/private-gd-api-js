import querystring from 'querystring'
import clientConfig from '../../config/client-config.js'
import httpClient from '../../providers/http-client.js'
import accCommentsConfig from '../../config/comments/acc-comments.config.js'

export async function getAccComments (req, res) {
  const { accountID, page } = req.body
  const postData = querystring.stringify(accCommentsConfig(accountID, page))
  const options = clientConfig(postData, '/database/getGJAccountComments20.php')

  try {
    const response = await httpClient(options, postData)
    res.send(response)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
