import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'

/**
 * 数字加逗号
 * @param {number|string} number
 * @returns {string}
 */
export function number_addComma(number) {
  const functionName = 'number' + '_' + 'addComma'
  arguments.length === 0 && throw_empty(functionName, 'number')
  type_number(number) || throw_type(functionName, 'number', 'number')
  // 开始处理
  return (+number || 0).toString().replace(/^-?\d+/g, function (m) {
    return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',')
  })
}