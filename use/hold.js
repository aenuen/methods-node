import { hold_cn } from '../src/hold/cn'
import { hold_letter } from '../src/hold/letter'
import { hold_number } from '../src/hold/number'
import { hold_numberAndComma } from '../src/hold/numberAndComma'
import { hold_numberAndDot } from '../src/hold/numberAndDot'
import { hold_numberAndLetter } from '../src/hold/numberAndLetter'
import { hold_numberAndMinus } from '../src/hold/numberMinus'

export function _hold_cn(string) {
  return hold_cn(string)
}

export function _hold_letter(string) {
  return hold_letter(string)
}

export function _hold_number(string) {
  return hold_number(string)
}

export function _hold_numberAndComma(string) {
  return hold_numberAndComma(string)
}

export function _hold_numberAndDot(string) {
  return hold_numberAndDot(string)
}

export function _hold_numberAndLetter(string) {
  return hold_numberAndLetter(string)
}

export function _hold_numberAndMinus(string) {
  return hold_numberAndMinus(string)
}