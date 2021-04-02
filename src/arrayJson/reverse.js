import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'
import { arrayJson_keyName } from './keyName'

/**
 * 反序 arrayJson
 * @param {[]|{}} arrayJson 要反序的 arrayJson
 * @returns {[]|{}}
 */
export function arrayJson_reverse(arrayJson) {
  const functionName = 'arrayJson' + '_' + 'reverse'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  // 开始处理
  let result = typeArray ? [] : {}, keyArray = arrayJson_keyName(arrayJson)
  keyArray.reverse()
  Object.keys(keyArray).forEach((key) => {
    typeArray ? result.push(arrayJson[keyArray[key]]) : result[keyArray[key]] = arrayJson[keyArray[key]]
  })
  return result
}