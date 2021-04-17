import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { type_string } from '../type/string'

/**
 * 如果值复数，则显示复数标签
 * @param {number|string} value
 * @param {string} unit
 * @return {string}
 */
export function some_pluralize(value, unit) {
  const functionName = 'some' + '_' + 'pluralize'
  arguments.length === 0 && throw_empty(functionName, 'value')
  type_number(value) || type_string(value) || throw_type(functionName, 'value', 'number')
  arguments.length === 1 && throw_empty(functionName, 'unit')
  type_string(unit) || throw_type(functionName, 'unit', 'string')
  // 开始处理
  return value === 1 ? value + unit : value + unit + 's'
}