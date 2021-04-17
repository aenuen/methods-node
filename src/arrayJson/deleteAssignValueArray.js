import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'
import { arrayJson_whetherIn } from './whetherIn'

/**
 * 删除 arrayJson 中的 assignValue 值
 * @param {[]|{}} arrayJson
 * @param {[]} assignValueArray
 * @returns {[]|{}}
 */
export function arrayJson_deleteAssignValueArray(arrayJson, assignValueArray) {
  const functionName = 'arrayJson' + '_' + 'deleteAssignValueArray'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'assignValueArray')
  type_array(assignValueArray) || throw_type(functionName, 'assignValueArray', 'array')
  // 开始处理
  const nAoj = typeArray ? [] : {}
  for (let i in arrayJson) {
    if (arrayJson.hasOwnProperty(i)) {
      if (!arrayJson_whetherIn(assignValueArray, arrayJson[i], true)) {
        typeArray ? nAoj.push(arrayJson[i]) : nAoj[i] = arrayJson[i]
      }
    }
  }
  return nAoj
}
