import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 是否 number 格式
 * @param value
 * @returns {boolean}
 */
export function format_number(value) {
  const functionName = 'format' + '_' + 'number'
  arguments.length === 0 && throw_empty(functionName, 'value')
  type_string(value) || throw_type(functionName, 'value', 'string')
  // 开始处理
  return /^[0-9]+$/.test(value)
}