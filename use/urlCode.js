import { urlCode_decode } from '../src/urlCode/decode'
import { urlCode_encode } from '../src/urlCode/encode'

export function _urlCode_decode(string) {
  return urlCode_decode(string)
}

export function _urlCode_encode(string) {
  return urlCode_encode(string)
}