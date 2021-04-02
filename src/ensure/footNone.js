import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 保证字符串尾部没有指定字符
 * @param  {number|string} string
 * @param {number|string} assign
 * @returns {number|string}
 */
export function ensure_footNone(string, assign) {
  const functionName = 'ensure' + '_' + 'footNone'
  arguments.length === 0 && throw_empty(functionName, 'string')
  arguments.length === 1 && throw_empty(functionName, 'assign')
  type_string(string) || throw_type(functionName, 'string', 'string')
  type_string(assign) || throw_type(functionName, 'assign', 'string')
  // 开始处理
  const strLen = string.length, signLen = assign.length
  return string.substr(-signLen) === assign ? ensure_footNone(string.substr(0, strLen - signLen), assign) : string
}