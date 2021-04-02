import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'

/**
 * 随机 number 个字符
 * @param {number|string} number
 * @returns {string}
 */
export function string_random(number) {
  const functionName = 'string' + '_' + 'random'
  arguments.length === 0 && throw_empty(functionName, 'number')
  type_number(number) || throw_type(functionName, 'number', 'number')
  // 开始处理
  number = parseInt(number)
  number = Math.abs(number)
  let string = ''
  for (let i = 0; i < number; i++) {
    string += Math.random().toString(36).substr(2)
  }
  return string.substr(0, number)
}