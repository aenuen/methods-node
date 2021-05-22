import { hold_cn } from '../src/hold/cn'
import { hold_first } from '../src/hold/first'
import { hold_letter } from '../src/hold/letter'
import { hold_number } from '../src/hold/number'
import { hold_numberComma } from '../src/hold/numberComma'
import { hold_numberDot } from '../src/hold/numberDot'
import { hold_numberDotMinus } from '../src/hold/numberDotMinus'
import { hold_numberLetter } from '../src/hold/numberLetter'
import { hold_numberMinus } from '../src/hold/numberMinus'
import { hold_price } from '../src/hold/price'
import { hold_stock } from '../src/hold/stock'

export function _hold_cn(string) {
  return hold_cn(string)
}

export function _hold_first(string, char) {
  return hold_first(string, char)
}

export function _hold_letter(string) {
  return hold_letter(string)
}

export function _hold_number(string) {
  return hold_number(string)
}

export function _hold_numberComma(string) {
  return hold_numberComma(string)
}

export function _hold_numberDot(string) {
  return hold_numberDot(string)
}

export function _hold_numberDotMinus(string) {
  return hold_numberDotMinus(string)
}

export function _hold_numberLetter(string) {
  return hold_numberLetter(string)
}

export function _hold_numberMinus(string) {
  return hold_numberMinus(string)
}

export function _hold_price(string) {
  return hold_price(string)
}

export function _hold_stock(string) {
  return hold_stock(string)
}
