import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { time_object } from './object'

/**
 * 两个时间相差多少秒
 * @param timeOne
 * @param timeTwo
 * @param abs
 * @returns {string|number}
 */
export function time_diff(timeOne, timeTwo, abs) {
  const functionName = 'time' + '_' + 'diff'
  arguments.length === 0 && throw_empty(functionName, 'timeOne')
  const timeOneObject = time_object(timeOne)
  type_date(timeOneObject) || throw_type(functionName, 'timeOne', '有效的时间')
  arguments.length === 1 && throw_empty(functionName, 'timeTwo')
  const timeTwoObject = time_object(timeTwo)
  type_date(timeTwoObject) || throw_type(functionName, 'timeTwo', '有效的时间')
  abs = abs !== false
  // 开始处理
  const result = +((timeOneObject - timeTwoObject) / 1000).toFixed(0)
  return abs ? Math.abs(result) : result
}