import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 进行 uniCode 编码
 * @param {number|string} string
 * @returns {number|string}
 */
export function uniCode_encode(string) {
  const functionName = 'uniCode' + '_' + 'encode'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  // 开始处理
  let array = []
  for (let i = 0; i < string.length; i++) array[i] = ('00' + string.charCodeAt(i).toString(16)).slice(-4)
  return '\\u' + array.join('\\u')
}