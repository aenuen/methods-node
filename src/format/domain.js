import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 是否 domain 格式
 * @param value
 * @returns {boolean}
 */
export function format_domain(value) {
  const functionName = 'format' + '_' + 'domain'
  arguments.length === 0 && throw_empty(functionName, 'value')
  type_string(value) || throw_type(functionName, 'value', 'string')
  // 开始处理
  return /^[a-z0-9]+(([.\-])[a-z0-9]+)*\.[a-z0-9]+$/.test(value)
}