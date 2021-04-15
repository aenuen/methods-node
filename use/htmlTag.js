import { htmlTag_clean } from '../src/htmlTag/clean'
import { htmlTag_decode } from '../src/htmlTag/decode'
import { htmlTag_encode } from '../src/htmlTag/encode'

export function _htmlTag_clean(htmlString) {
  return htmlTag_clean(htmlString)
}

export function _htmlTag_decode(htmlString) {
  return htmlTag_decode(htmlString)
}

export function _htmlTag_encode(htmlString) {
  return htmlTag_encode(htmlString)
}