import { trim_all } from '../src/trim/all'
import { trim_left } from '../src/trim/left'
import { trim_right } from '../src/trim/right'

export function _trim_all(string) {
  return trim_all(string)
}

export function _trim_left(string) {
  return trim_left(string)
}

export function _trim_right(string) {
  return trim_right(string)
}