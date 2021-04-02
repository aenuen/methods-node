import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'
import { file_fullName } from './fullName'

/**
 * 从字符串中提取文件的后缀名称
 * @param {number|string} string
 * @returns {string}
 */
export function file_suffixName(string) {
  const functionName = 'file' + '_' + 'suffixName'
  arguments.length === 0 && throw_empty(functionName, 'string')
  type_string(string) || throw_type(functionName, 'string', 'string')
  // 开始处理
  return file_fullName(string).replace(/.+[.]([^.\\\/]+)$/ig, '$1')
}