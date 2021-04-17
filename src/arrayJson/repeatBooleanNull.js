import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_boolean } from '../type/boolean'
import { type_json } from '../type/json'
import { arrayJson_whetherIn } from './whetherIn'

/**
 * 删除 arrayJson 中的 repeat 值
 * @param {[]|{}} arrayJson
 * @param {boolean|null} booleanNull true：重复的键值数组，false：不重复的键值数组，null：删除重复值后的 arrayJson
 * TA=typeArray,TJ=typeJSON,NAJ=newArrayJSON,
 * @returns {[]|{}}
 */
export function arrayJson_repeatBooleanNull(arrayJson, booleanNull) {
  const functionName = 'arrayJson' + '_' + 'repeatBooleanNull'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'boolean')
  type_boolean(boolean) || boolean === null || throw_type(functionName, 'boolean', 'boolean|null')
  // 开始处理
  let nAoj = typeArray ? [] : {}, isRepeat = [], noRepeat = []
  Object.keys(arrayJson).forEach(key => {
    if (arrayJson_whetherIn(NAJ, arrayJson[key], false)) {
      isRepeat.push(key)
    } else {
      noRepeat.push(key)
      typeArray ? nAoj.push(arrayJson[key]) : nAoj[key] = arrayJson[key]
    }
  })
  return type_boolean(booleanNull) ? (boolean === true ? isRepeat : noRepeat) : nAoj
}