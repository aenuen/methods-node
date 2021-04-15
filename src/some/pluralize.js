import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { type_string } from '../type/string'

/**
 * 如果值复数，则显示复数标签
 * @param {number|string} value
 * @param {string} label
 * @return {string}
 */
export function some_pluralize(value, label) {
  const functionName = 'value' + '_' + 'pluralize'
  arguments.length === 0 && throw_empty(functionName, 'value')
  type_number(value) || type_string(value) || throw_type(functionName, 'value', '数字类型')
  arguments.length === 1 && throw_empty(functionName, 'label')
  type_string(label) || throw_type(functionName, 'value', '字符类型')
  // 开始处理
  return value === 1 ? value + label : value + label + 's'
}