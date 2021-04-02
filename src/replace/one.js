import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 替换一次
 * @param {number|string} string
 * @param {number|string} search
 * @param {number|string} replace
 * @returns {number|string}
 */
export function replace_one(string, search, replace) {
  const functionName = 'replace' + '_' + 'one'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  arguments.length === 1 && throw_empty(functionName, 'search')
  type_string(search) || throw_type(functionName, 'search', 'string')
  arguments.length === 2 && throw_empty(functionName, 'replace')
  type_string(replace) || throw_type(functionName, 'replace', 'string')
  // 开始处理
  return string.toString().replace(search.toString(), replace.toString)
}