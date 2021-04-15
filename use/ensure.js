import { ensure_footHave } from '../src/ensure/footHave'
import { ensure_footNone } from '../src/ensure/footNone'
import { ensure_headHave } from '../src/ensure/headHave'
import { ensure_headNone } from '../src/ensure/headNone'

export function _ensure_footHave(string, assign) {
  return ensure_footHave(string, assign)
}

export function _ensure_footNone(string, assign) {
  return ensure_footNone(string, assign)
}

export function _ensure_headHave(string, assign) {
  return ensure_headHave(string, assign)
}

export function _ensure_headNone(string, assign) {
  return ensure_headNone(string, assign)
}
