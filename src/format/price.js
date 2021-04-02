import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 是否 price 格式
 * @param value
 * @returns {boolean}
 */
export function format_price(value) {
  const functionName = 'format' + '_' + 'price'
  arguments.length === 0 && throw_empty(functionName, 'value')
  type_string(value) || throw_type(functionName, 'value', 'string')
  // 开始处理
  return /^\d+\.?\d{0,2}$/.test(value)
}