import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { type_number } from '../type/number'
import { time_format } from '../time/format'
import { time_object } from '../time/object'

/**
 * 获取日期 number 天后(前)的日期，正数为后，负数为前
 * @param {"有效的时间"|*} value 有效的时间
 * @param {number|string} number 多少天
 * @returns {string}
 */
export function date_apartDate(value, number) {
  const functionName = 'date' + '_' + 'apartDate'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeObject = time_object(value)
  type_date(timeObject) || throw_type(functionName, 'value', '有效的时间')
  arguments.length === 1 && throw_empty(functionName, 'number')
  type_number(number) || throw_type(functionName, 'number', 'number')
  // 开始处理
  return time_format(+timeObject + number * 1000 * 24 * 60 * 60, '{y}-{m}-{d}', true)
}