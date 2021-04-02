import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 保证字符串尾部含有指定字符
 * @param  {number|string} string
 * @param {number|string} assign
 * @returns {number|string}
 */
export function ensure_footHave(string, assign) {
  const functionName = 'ensure' + '_' + 'footHave'
  arguments.length === 0 && throw_empty(functionName, 'string')
  arguments.length === 1 && throw_empty(functionName, 'assign')
  type_string(string) || throw_type(functionName, 'string', 'string')
  type_string(assign) || throw_type(functionName, 'assign', 'string')
  // 开始处理
  const length = assign.length
  return string.toString().substr(-length) === assign ? string : string + assign
}