import { throw_empty } from '../throw/empty'
import { type_function } from './function'
import { type_regexp } from './regexp'

/**
 * 是否空值类型
 * @param value
 * @returns {boolean}
 */
export function type_empty(value) {
  const functionName = 'type' + '_' + 'empty'
  arguments.length === 0 && throw_empty(functionName, 'value')
  // 开始处理
  const t1 = !type_function(value) && !type_regexp(value),
    t2 = value == null || value.length === 0 || JSON.stringify(value) === '{}'
  return t1 && t2
}