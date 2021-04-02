import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 字符转换成 html 代码
 * @param {number|string} htmlString
 * @returns {string}
 */
export function htmlTag_encode(htmlString) {
  const functionName = 'htmlTag' + '_' + 'decode'
  arguments.length === 0 && throw_empty(functionName, 'htmlString')
  type_string(htmlString) || throw_type(functionName, 'htmlString', 'string')
  // 开始处理
  return htmlString.toString()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;')
}