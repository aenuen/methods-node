import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'
import { hold_numberDotMinus } from './numberDotMinus'
import { hold_first } from './first'

/**
 * 字符串中保留库存（包含负数、小数、两位小数）
 * @param {number|string} string
 * @returns {string}
 */
export function hold_stock(string) {
  const functionName = 'hold' + '_' + 'stock'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  // 开始处理
  let stock = hold_numberDotMinus(string)
  stock = `${stock.charAt(0)}${string.substr(1).replace(new RegExp('-', 'g'), '')}`
  stock = stock = hold_first(stock, '-')
  stock = stock = hold_first(stock, '.')
  const float = stock.split('.')[1] || ''
  if (float.length > 2) stock = (stock.toString().match(/^\-?\d+(?:\.\d{0,2})?/))[0]
  return stock
}
