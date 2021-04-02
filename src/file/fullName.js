import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 从字符串中提取文件的文件全名
 * @param {number|string} string
 * @returns {string}
 */
export function file_fullName(string) {
  const functionName = 'file' + '_' + 'fullName'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  // 开始处理
  const a = document.createElement('a')
  a.href = string
  return (a.pathname.match(/\/([^\/?#]+)$/i) || ['', ''])[1]
}