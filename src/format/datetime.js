import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'
import { format_date } from './date'

/**
 * 是否 datetime 格式
 * @param value
 * @returns {boolean}
 */
export function format_datetime(value) {
  const functionName = 'format' + '_' + 'datetime'
  arguments.length === 0 && throw_empty(functionName, 'value')
  type_string(value) || throw_type(functionName, 'value', 'string')
  // 开始处理
  return /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.test(value.toString())
    && format_date(value.split(' ')[0])
    && RegExp.$4 < 24
    && RegExp.$5 < 60
    && RegExp.$6 < 60
}