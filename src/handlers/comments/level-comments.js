import querystring from 'querystring'
import clientConfig from '../../config/client-config.js'
import httpClient from '../../providers/http-client.js'
import levelCommentsConfig from '../../config/comments/level-comments.cofig.js'

export async function getLevelComments (req, res) {
  const { page, levelID } = req.body
  const postData = querystring.stringify(levelCommentsConfig(page, levelID))
  const options = clientConfig(postData, '/database/getGJComments21.php')

  try {
    const response = await httpClient(options, postData)
    res.send(response)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
