import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { time_object } from './object'

/**
 * 获取时间戳，若 val 为空，则为当前时间
 * @param value
 * @returns {string}
 */
export function time_stamp(value) {
  const functionName = 'time' + '_' + 'stamp'
  arguments.length === 0 && throw_empty(functionName, 'value')
  // 开始处理
  const timeObject = time_object(value)
  type_date(timeObject) ||
  throw_type(functionName, 'value', '有效的时间')
  return (timeObject.getTime() / 1000).toFixed(0)
}