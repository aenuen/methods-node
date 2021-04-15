import { string_cut } from '../src/string/cut'
import { string_cutCn } from '../src/string/cutCn'
import { string_length } from '../src/string/length'
import { string_loop } from '../src/string/loop'
import { string_random } from '../src/string/random'
import { string_reverse } from '../src/string/reverse'
import { string_toArrayAssign } from '../src/string/toArrayAssign'
import { string_toArrayNumber } from '../src/string/toArrayNumber'

export function _string_cut(string, number) {
  return string_cut(string, number)
}

export function _string_cutCn(string, cnNumber, enNumber) {
  return string_cutCn(string, cnNumber, enNumber)
}

export function _string_length(string) {
  return string_length(string)
}

export function _string_loop(string, number) {
  return string_loop(string, number)
}

export function _string_random(number) {
  return string_random(number)
}

export function _string_reverse(string) {
  return string_reverse(string)
}

export function _string_toArrayAssign(string, assign) {
  return string_toArrayAssign(string, assign)
}

export function _string_toArrayNumber(string, number) {
  return string_toArrayNumber(string, number)
}