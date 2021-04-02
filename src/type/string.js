import { throw_empty } from '../throw/empty'
import { type_number } from './number'

/**
 * 是否字符类型
 * @param value
 * @returns {boolean}
 */
export function type_string(value) {
  const functionName = 'type' + '_' + 'string'
  arguments.length === 0 && throw_empty(functionName, 'value')
  return Object.prototype.toString.call(value).toLowerCase() === '[object string]' || type_number(value)
}