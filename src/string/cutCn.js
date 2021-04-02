import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { type_string } from '../type/string'
import { have_cn } from '../have/cn'
import { string_cut } from './cut'

/**
 * 字符串截取（中英文分别设置）
 * @param {number|string} string
 * @param {number|string} cnNumber
 * @param {number|string} enNumber
 * @returns {string}
 */
export function string_cutCn(string, cnNumber, enNumber) {
  const functionName = 'string' + '_' + 'cut'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  arguments.length === 1 && throw_empty(functionName, 'cnNumber')
  type_number(cnNumber) || throw_type(functionName, 'cnNumber', 'number')
  arguments.length === 2 && throw_empty(functionName, 'enNumber')
  type_number(enNumber) || throw_type(functionName, 'enNumber', 'number')
  // 开始处理
  string = string.toString()
  cnNumber = parseInt(cnNumber)
  enNumber = parseInt(enNumber)
  const cn = string_cut(string, cnNumber), en = string_cut(string, enNumber)
  return have_cn(string) ? cn : en
}