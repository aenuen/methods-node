import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { type_string } from '../type/string'

/**
 * 字符串全部大写
 * @param {number|string} value
 * @returns {string}
 */
export function bigSmallWrite_allBig(value) {
  const functionName = 'bigSmallWrite' + '_' + 'allBig'
  arguments.length === 0 && throw_empty(functionName, 'value')
  type_number(value) || type_string(value) || throw_type(functionName, 'value', 'number|string')
  return value.toString().toUpperCase()
}