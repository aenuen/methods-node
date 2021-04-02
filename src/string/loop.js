import { type_number } from '../type/number'
import { type_string } from '../type/string'
import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'

/**
 * 字符串循环
 * @param {number|string} string
 * @param {number|string} number
 * @returns {string}
 */
export function string_loop(string, number) {
  const functionName = 'string' + '_' + 'loop'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  arguments.length === 1 && throw_empty(functionName, 'number')
  type_number(number) || throw_type(functionName, 'number', 'number')
  // 开始处理
  string = string.toString()
  number = parseInt(number)
  let result = ''
  for (let i = 0; i < number; i++) {
    result += string
  }
  return result
}