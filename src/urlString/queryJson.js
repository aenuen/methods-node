import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'

/**
 * 从一个 urlString 中提取 queryJson
 * @param {null|number|string} urlString
 * @returns {json}
 */
export function urlString_queryJson(urlString) {
  const functionName = 'urlString' + '_' + 'jqueryJson'
  arguments.length === 0 && throw_empty(functionName, 'urlString')
  type_string(urlString) || throw_type(functionName, 'urlString', 'string')
  // 开始处理
  const search = urlString.substring(urlString.lastIndexOf('?') + 1), json = {}
  search.replace(/([^?&=]+)=([^?&=]*)/g, (result, $1, $2) => {
    const name = decodeURIComponent($1)
    let value = decodeURIComponent($2)
    value = String(value)
    json[name] = value
    return result
  })
  return json
}