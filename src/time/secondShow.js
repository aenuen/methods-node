import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'

/**
 * 时间秒的格式化
 * @param {number|string} seconds
 * @returns {string}
 */
export function time_secondShow(seconds) {
  const functionName = 'time' + '_' + 'secondFormat'
  arguments.length === 0 && throw_empty(functionName, 'seconds')
  type_number(seconds) || throw_type(functionName, 'seconds', '数字类型')
  // 开始处理
  let minutes = 0
  let hours = 0
  seconds > 59 && (minutes = parseInt((seconds / 60).toString()))
  seconds = parseInt((seconds % 60).toString())
  minutes > 59 && (hours = parseInt((minutes / 60).toString()))
  minutes = parseInt((minutes % 60).toString())
  seconds < 10 && (seconds = '0' + seconds)
  minutes < 10 && (minutes = '0' + minutes)
  hours < 10 && (hours = '0' + hours)
  return `${hours}:${minutes}:${seconds}`
}