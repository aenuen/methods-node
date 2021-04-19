import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'
import { arrayJson_whetherIn } from './whetherIn'

/**
 * 删除 arrayJson 中的 empty 以及 otherArray 的值
 * @param {[]|{}} arrayJson
 * @param {[]} otherArray 现在仅设置为不等于空字符，其它条件可额外增加，如：[null,undefined]
 * @returns {[]|[]}
 */
export function arrayJson_deleteEmptyAndOtherArray(arrayJson, otherArray) {
  const functionName = 'arrayJson' + '_' + 'deleteEmptyAndOtherArray'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'otherArray')
  type_array(otherArray) || throw_type(functionName, 'otherArray', 'array')
  // 开始处理
  const result = typeArray ? [] : {}
  for (let key in arrayJson) {
    if (arrayJson.hasOwnProperty(key)) {
      const value = arrayJson[key]
      value === '' ||
      arrayJson_whetherIn(otherArray, value, false) ||
      (typeArray ? result.push(value) : result[key] = value)
    }
  }
  return result
}