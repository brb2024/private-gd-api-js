export default function clientConfig (postData, reqPath) {
  return {
    hostname: 'www.boomlings.com',
    path: reqPath,
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }
}
