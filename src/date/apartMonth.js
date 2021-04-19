import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { type_number } from '../type/number'
import { time_object } from '../time/object'

/**
 * 获取本月至 number 个月前的年份和月份
 * @param value
 * @param {number|string} number
 * @returns {string|[]}
 */
export function date_apartMonth(value, number) {
  const functionName = 'date' + '_' + 'apartMonth'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeObject = time_object(value)
  type_date(timeObject) || throw_type(functionName, 'value', '有效的时间')
  arguments.length === 1 && throw_empty(functionName, 'number')
  type_number(number) || throw_type(functionName, 'number', 'number')
  // 开始处理
  let y = timeObject.getFullYear(), m = timeObject.getMonth() + 1, array = []
  array.push(y + '-' + ('0' + m).substr(-2))
  for (let i = 0; i < +number; i++) {
    m--
    m <= 0 && ((function() {
      y -= 1
      m = 12
    })())
    array.push(y + '-' + ('0' + m).substr(-2))
  }
  return array
}