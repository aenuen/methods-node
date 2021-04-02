import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { type_boolean } from '../type/boolean'
import { type_string } from '../type/string'
import { time_object } from './object'
import { time_format } from './format'

/**
 * 获取多少时间以前
 * @param value
 * @param {"{y}-{m}-{d} {h}:{i}:{s} 星期{w}"} format
 * @param {boolean} zero
 * @returns {string}
 */
export function time_ago(value, format, zero) {
  const functionName = 'time' + '_' + 'ago'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeObject = time_object(value)
  type_date(timeObject) || throw_type(functionName, 'value', '有效的时间')
  arguments.length === 1 && throw_empty(functionName, 'format')
  type_string(format) || throw_type(functionName, 'format', 'string')
  arguments.length === 2 && throw_empty(functionName, 'zero')
  type_boolean(zero) || throw_type(functionName, 'zero', 'boolean')
  // 开始处理
  const nowTimestamp = Date.now() // 当前时间戳（14位）
  const diff = (nowTimestamp - timeObject) / 1000
  return diff < 30 ? '刚刚' :
    diff < 3600 ? Math.ceil(diff / 60) + '分钟前' :
      diff < 86400 ? Math.ceil(diff / 3600) + '小时前' :
        diff < 172800 ? '1天前' :
          time_format(value, format, zero)
}