import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_boolean } from '../type/boolean'
import { type_json } from '../type/json'
import { type_string } from '../type/string'
import { arrayJson_deleteAssignKey } from './deleteAssignKey'
import { arrayJson_holdAssignKey } from './holdAssignKey'
import { arrayJson_repeat } from './repeat'
import { arrayJson_resetKeyOne } from './resetKeyOne'

/**
 * 根据 assignArray 在 arrayJson 中查找出 same 值，并列出指定的 keyName 的值
 * @param {[]|{}} arrayJson
 * @param {[]} assignArray
 * @param {number|string} keyName
 * @param {boolean} boolean
 * @return {[]}
 */
export function arrayJson_same(arrayJson, assignArray, keyName, boolean) {
  const functionName = 'arrayJson' + '_' + 'same'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'assignArray')
  type_array(assignArray) || throw_type(functionName, 'assignArray', 'array')
  arguments.length === 2 && throw_empty(functionName, 'keyName')
  type_string(keyName) || throw_type(functionName, 'keyName', 'number|string')
  arguments.length === 3 && throw_empty(functionName, 'boolean')
  type_boolean(boolean) || throw_type(functionName, 'boolean', 'boolean')
  // 开始处理
  const array = arrayJson_resetKeyOne(assignArray)
  array.push(keyName)
  let oneArray = typeArray ? [] : {}
  Object.keys(arrayJson).forEach((key) => {
    oneArray[key] = arrayJson_holdAssignKey(arrayJson[key], array)
  })
  let twoArray = typeArray ? [] : {}
  Object.keys(oneArray).forEach((key) => {
    twoArray[key] = arrayJson_deleteAssignKey(oneArray[key], [keyName])
  })
  const threeArray = boolean ? arrayJson_repeat(twoArray, true) : arrayJson_repeat(twoArray, false)
  let result = []
  console.log(threeArray)
  Object.keys(threeArray).forEach(key => {
    result.push(arrayJson[threeArray[key]][keyName])
  })
  return result
}