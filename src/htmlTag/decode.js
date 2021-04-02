import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * html 代码转换成字符
 * @param {number|string} htmlString
 * @returns {string}
 */
export function htmlTag_decode(htmlString) {
  const functionName = 'htmlTag' + '_' + 'decode'
  arguments.length === 0 && throw_empty(functionName, 'htmlString')
  type_string(htmlString) || throw_type(functionName, 'htmlString', 'string')
  // 开始处理
  return htmlString.toString()
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, '\'')
    .replace(/&quot;/g, '"')
}