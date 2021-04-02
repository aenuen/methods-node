import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'
import { arrayJson_keyName } from './keyName'
import { arrayJson_whetherIn } from './whetherIn'

/**
 * 保留 arrayJson 中指定 holdKey 值
 * @param {[]|{}} arrayJson
 * @param {[]} holdKey
 * @returns {[]|{}}
 */
export function arrayJson_holdAssignKey(arrayJson, holdKey) {
  const functionName = 'arrayJson' + '_' + 'holdAssignKey'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'holdKey')
  type_array(holdKey) || throw_type(functionName, 'holdKey', 'array')
  // 开始处理
  const keyArray = arrayJson_keyName(arrayJson)
  let result = typeArray ? [] : {}
  Object.keys(holdKey).forEach((key) => {
    arrayJson_whetherIn(keyArray, holdKey[key], false) && (
      typeArray ? result.push(arrayJson[holdKey[key]]) : result[holdKey[key]] = arrayJson[holdKey[key]]
    )
  })
  return result
}