import { number_addComma } from '../src/number/addComma'
import { number_addZero } from '../src/number/addZero'
import { number_priceBigWrite } from '../src/number/bigWrite'
import { number_unit } from '../src/number/unit'

export function _number_addComma(number) {
  return number_addComma(number)
}

export function _number_addZero(number, length) {
  return number_addZero(number, length)
}

export function _number_priceBigWrite(number) {
  return number_priceBigWrite(number)
}

export function _number_unit(number, fixed) {
  return number_unit(number, fixed)
}