import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'
import { arrayJson_whetherIn } from './whetherIn'

/**
 * 删除 arrayJson 中的 empty 值
 * @param {[]|{}} arrayJson
 * @param {[]|*} other 现在仅设置为不等于空字符，其它条件可额外增加，如：[null,undefined]
 * @returns {[]|[]}
 */
export function arrayJson_deleteEmptyAndOtherArray(arrayJson, other) {
  const functionName = 'arrayJson' + '_' + 'deleteEmptyAndOtherArray'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'other')
  type_array(other) || throw_type(functionName, 'other', 'array')
  // 开始处理
  const result = typeArray ? [] : {}
  Object.keys(arrayJson).forEach((key) => {
    const value = arrayJson[key]
    value === '' || arrayJson_whetherIn(other, value, false) || (typeArray ? result.push(value) : result[key] = value)
  })
  return result
}