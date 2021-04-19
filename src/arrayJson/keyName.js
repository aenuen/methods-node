import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'

/**
 * 获取 arrayJson 的 keyName 值，并组成新的数组
 * @param {[]|{}} arrayJson
 * @returns {[]}
 */
export function arrayJson_keyName(arrayJson) {
  const functionName = 'arrayJson' + '_' + 'keyName'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  // 开始处理
  let result = []
  for (let key in arrayJson) arrayJson.hasOwnProperty(key) && result.push(key)
  return result
}