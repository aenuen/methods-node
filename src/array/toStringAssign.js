import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_string } from '../type/string'

/**
 * 以 assign 分隔 array 组成新的 string
 * @param {array} array 要分隔的数组
 * @param {number|string} assign
 * @returns {string}
 */
export function array_toStringAssign(array, assign) {
  const functionName = 'array' + '_' + 'stringToArrayNumber'
  arguments.length === 0 && throw_empty(functionName, 'array')
  type_array(array) || throw_type(functionName, 'array', 'array')
  arguments.length === 1 && throw_empty(functionName, 'assign')
  type_string(assign) || throw_type(functionName, 'assign', 'string')
  // 开始处理
  return array.join(assign.toString())
}