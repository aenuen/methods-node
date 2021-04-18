import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'

/**
 * 保留 arrayJson 中指定 holdValueArray 值
 * @param {[]|{}} arrayJson
 * @param {[]} holdValueArray
 * @returns {[]}
 */
export function arrayJson_holdAssignValueArray(arrayJson, holdValueArray) {
  const functionName = 'arrayJson' + '_' + 'holdAssignValueArray'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'holdValueArray')
  type_array(holdValueArray) || throw_type(functionName, 'holdValueArray', 'array')
  // 开始处理
  let nAoj = typeArray ? [] : {}
  for (let k in holdValueArray) {
    if (holdValueArray.hasOwnProperty(k)) {
      for (let e in arrayJson) {
        if (arrayJson.hasOwnProperty(e)) {
          JSON.stringify(holdValueArray[k]) === JSON.stringify(arrayJson[e]) && (
            typeArray ? nAoj.push(arrayJson[e]) : nAoj[e] = arrayJson[e]
          )
        }
      }
    }
  }
  return nAoj
}