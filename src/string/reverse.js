import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 字符串反序
 * @param {number|string} string
 * @returns {string}
 */
export function string_reverse(string) {
  const functionName = 'string' + '_' + 'reverse'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  // 开始处理
  return string.toString().split('').reverse().join('')
}