import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 字符串中保留中文
 * @param {number|string} string
 * @returns {string}
 */
export function hold_cn(string) {
  const functionName = 'hold' + '_' + 'cn'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  // 开始处理
  return string.toString().replace(/[^\u4e00-\u9fa5]/g, '')
}