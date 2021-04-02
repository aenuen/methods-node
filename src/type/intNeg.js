import { throw_empty } from '../throw/empty'
import { type_int } from './int'

/**
 * 是否负整数类型
 * @param value
 * @returns {boolean}
 */
export function type_intNeg(value) {
  const functionName = 'type' + '_' + 'intNeg'
  arguments.length === 0 && throw_empty(functionName, 'value')
  return type_int(value) && value < 0
}