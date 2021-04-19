import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_same } from '../type/same'
import { type_json } from '../type/json'
import { type_string } from '../type/string'
import { arrayJson_deleteAssignKeyArray } from './deleteAssignKeyArray'
import { arrayJson_holdAssignKeyArray } from './holdAssignKeyArray'
import { arrayJson_repeatTwoOption } from './repeatTwoOption'
import { arrayJson_resetKeyOne } from './resetKeyOne'

/**
 * 根据 assignArray 在 arrayJson 中查找出 same 值，并列出指定的 keyName 的值
 * @param {[]|{}} arrayJson
 * @param {[]} assignArray
 * @param {number|string} keyName
 * @param {boolean} same
 * @return {[]}
 */
export function arrayJson_same(arrayJson, assignArray, keyName, same) {
  const functionName = 'arrayJson' + '_' + 'same'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'assignArray')
  type_array(assignArray) || throw_type(functionName, 'assignArray', 'array')
  arguments.length === 2 && throw_empty(functionName, 'keyName')
  type_string(keyName) || throw_type(functionName, 'keyName', 'number|string')
  arguments.length === 3 && throw_empty(functionName, 'same')
  type_same(same) || throw_type(functionName, 'same', 'same')
  // 开始处理
  const array = arrayJson_resetKeyOne(assignArray)
  array.push(keyName)
  let oneArray = typeArray ? [] : {}
  for (let one in arrayJson) {
    if (arrayJson.hasOwnProperty(one)) {
      oneArray[one] = arrayJson_holdAssignKeyArray(arrayJson[one], array)
    }
  }
  let twoArray = typeArray ? [] : {}
  for (let two in oneArray) {
    if (oneArray.hasOwnProperty(two)) {
      twoArray[two] = arrayJson_deleteAssignKeyArray(oneArray[two], [keyName])
    }
  }
  const threeArray = same ? arrayJson_repeatTwoOption(twoArray, 1) :
    arrayJson_repeatTwoOption(twoArray, 2)
  let result = []
  for (let three in threeArray) {
    if (threeArray.hasOwnProperty(three)) {
      result.push(arrayJson[three][keyName])
    }
  }
  return result
}