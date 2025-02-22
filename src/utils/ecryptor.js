import crypto from 'crypto'

export function sha1Cryptor (...params) {
  return crypto.createHash('sha1').update(params.join('')).digest('hex')
}
