import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { some_februaryDays } from './februaryDays'

/**
 * 某年某月的月天数
 * @param {number|string} year
 * @param {number|string} month
 * @return {number}
 */
export function some_yearMonthDays(year, month) {
  const functionName = 'some' + '_' + 'yearMonthDays'
  arguments.length === 0 && throw_empty(functionName, 'year')
  type_number(year) || throw_type(functionName, 'year', 'number')
  arguments.length === 1 && throw_empty(functionName, 'month')
  type_number(month) || throw_type(functionName, 'month', 'number')
  // 开始处理
  year = parseInt(year)
  month = parseInt(month)
  const monthDays = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1]
  return monthDays || some_februaryDays(year)
}