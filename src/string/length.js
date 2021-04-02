import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 字符串长度，中文算2个
 * @param {number|string} string
 * @returns {number}
 */
export function string_length(string) {
  const functionName = 'string' + '_' + 'length'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  // 开始处理
  string = string.toString()
  let length = 0
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i),
      f1 = charCode >= 0x0001 && charCode <= 0x007e,
      f2 = 0xff60 <= charCode && charCode <= 0xff9f
    length = f1 || f2 ? length + 1 : length + 2
  }
  return length
}