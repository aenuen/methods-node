import { replace_all } from '../src/replace/all'
import { replace_json } from '../src/replace/json'
import { replace_one } from '../src/replace/one'

export function _replace_all(string, search, replace) {
  return replace_all(string, search, replace)
}

export function _replace_json(string, json) {
  return replace_json(string, json)
}

export function _replace_one(string, search, replace) {
  return replace_one(string, search, replace)
}