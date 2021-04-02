import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { type_string } from '../type/string'

/**
 * 字符串单词首字母大写
 * @param {number|string} value
 * @returns {string}
 */
export function bigSmallWrite_wordFirstBig(value) {
  const functionName = 'bigSmallWrite' + '_' + 'wordFirstBig'
  arguments.length === 0 && throw_empty(functionName, 'value')
  type_number(value) || type_string(value) || throw_type(functionName, 'value', 'number|string')
  const ary = value.split(' ')
  for (let i = 0; i < ary.length; i++) ary[i] = ary[i].slice(0, 1).toUpperCase() + ary[i].slice(1).toLowerCase()
  return ary.join(' ')
}