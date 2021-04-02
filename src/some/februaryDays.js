import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { some_whetherLeapYear } from './whetherLeapYear'

/**
 * 二月的天数
 * @param {number|string} year
 * @returns {number}
 */
export function some_februaryDays(year) {
  const functionName = 'some' + '_' + 'februaryDays'
  arguments.length === 0 && throw_empty(functionName, 'year')
  type_number(year) || throw_type(functionName, 'year', 'number')
  // 开始处理
  year = parseInt(year)
  return some_whetherLeapYear(year) ? 29 : 28
}