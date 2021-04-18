import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'
import { arrayJson_keyName } from './keyName'
import { arrayJson_whetherIn } from './whetherIn'

/**
 * 保留 arrayJson 中指定 holdKeyArray 值
 * @param {[]|{}} arrayJson
 * @param {[]} holdKeyArray
 * @returns {[]|{}}
 */
export function arrayJson_holdAssignKeyArray(arrayJson, holdKeyArray) {
  const functionName = 'arrayJson' + '_' + 'holdAssignKey'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'holdKeyArray')
  type_array(holdKeyArray) || throw_type(functionName, 'holdKeyArray', 'array')
  // 开始处理
  const keyArray = arrayJson_keyName(arrayJson)
  let nAoJ = typeArray ? [] : {}
  for (let key in holdKeyArray) {
    if (holdKeyArray.hasOwnProperty(key)) {
      arrayJson_whetherIn(keyArray, holdKeyArray[key], false) && (
        typeArray ? nAoJ.push(arrayJson[holdKeyArray[key]]) :
          nAoJ[holdKeyArray[key]] = arrayJson[holdKeyArray[key]]
      )
    }
  }
  return nAoJ
}