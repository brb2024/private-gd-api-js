import http from 'http'

export default function httpClient (options, postData) {
  return new Promise((resolve, reject) => {
    let responseData = ''

    const request = http.request(options, (response) => {
      response.on('data', (chunck) => {
        responseData += chunck
      })

      response.on('end', () => {
        resolve(responseData)
      })
    })

    request.on('error', (err) => {
      reject(new Error(err))
    })

    request.write(postData)
    request.end()
  })
}
