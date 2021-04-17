import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'

/**
 * 保留 arrayJson 中指定 holdValue 值
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
  type_array(holdValue) || throw_type(functionName, 'holdValueArray', 'array')
  // 开始处理
  let nAoj = typeArray ? [] : {}
  Object.keys(holdValueArray).forEach((k) => {
    Object.keys(arrayJson).forEach((key) => {
      JSON.stringify(holdValueArray[k]) === JSON.stringify(arrayJson[key]) && (
        typeArray ? nAoj.push(arrayJson[key]) : nAoj[key] = arrayJson[key]
      )
    })
  })
  return nAoj
}