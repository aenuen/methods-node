import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'
import { hold_first } from './first'
import { hold_numberDot } from './numberDot'

/**
 * 字符串中保留价格
 * @param {number|string} string
 * @returns {string}
 */
export function hold_price(string) {
  const functionName = 'hold' + '_' + 'price'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  // 开始处理
  let price = hold_numberDot(string)
  price = hold_first(price, '.')
  const float = price.split('.')[1] || ''
  if (float.length > 2) price = (price.toString().match(/^\d+(?:\.\d{0,2})?/))[0]
  return price
}
