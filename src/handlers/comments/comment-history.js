import querystring from 'querystring'
import clientConfig from '../../config/client-config.js'
import httpClient from '../../providers/http-client.js'
import commentHistConfig from '../../config/comments/comment-history.config.js'

export async function getCommentHist (req, res) {
  const { page, userID } = req.body
  const postData = querystring.stringify(commentHistConfig(page, userID))
  const options = clientConfig(postData, '/database/getGJCommentHistory.php')

  try {
    const response = await httpClient(options, postData)
    res.send(response)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
