import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_boolean } from '../type/boolean'
import { type_number } from '../type/number'
import { type_string } from '../type/string'
import { time_format } from './format'
import { some_pluralize } from '../some/pluralize'
import { time_stamp } from './stamp'

/**
 * 多少时间前（英文）（~~转数字型，保留整数）
 * @param value
 * @param {boolean} zero
 * @param {"{y}-{m}-{d} {h}:{i}:{s} 星期{w}"} format
 * @returns {string}
 */
export function time_agoEn(value, format, zero) {
  const functionName = 'time' + '_' + 'agoEn'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeTimestamp = time_stamp(value) // 时间的时间戳（14位）
  type_number(timeTimestamp) || throw_type(functionName, 'value', '有效的时间')
  arguments.length === 1 && throw_empty(functionName, 'format')
  type_string(format) || throw_type(functionName, 'format', 'string')
  arguments.length === 2 && throw_empty(functionName, 'zero')
  type_boolean(zero) || throw_type(functionName, 'zero', 'boolean')
  // 开始处理
  const thisTimestamp = ~~(Date.now() / 1000) // 当前的时间戳（14位）
  const diff = thisTimestamp - timeTimestamp
  return diff < 60 ? 'now' :
    diff < 3600 ? some_pluralize(~~(diff / 60), ' minute') :
      diff < 86400 ? some_pluralize(~~(diff / 3600), ' hour') :
        diff < 691200 ? some_pluralize(~~(diff / 86400), ' day') :
          time_format(value, format, zero)
}