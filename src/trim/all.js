import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 去除字符串左侧和右侧的所有空格
 * @param {number|string} string
 * @return {number|string}
 */
export function trim_all(string) {
  const functionName = 'trim' + '_' + 'all'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  // 开始处理
  return string.toString().replace(/(^\s*)|(\s*$)/g, '')
}