import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'
import { type_number } from '../type/number'
import { arrayJson_resetKeyOne } from './resetKeyOne'

/**
 * 获取 arrayJson 中 number 个随机值，并组成的新数组(这些值是不重复的)
 * @param {[]|{}} arrayJson 从 arrayJson 中先取
 * @param {number|string} number 随机几个
 * @returns {[]}
 */
export function arrayJson_random(arrayJson, number) {
  const functionName = 'arrayJson' + '_' + 'random'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'number')
  type_number(number) || throw_type(functionName, 'number', 'number')
  // 开始处理
  number = parseInt(number)
  const array = arrayJson_resetKeyOne(arrayJson)
  let result = []
  for (let i = 0; i < number && array.length > 0; i++) {
    const r = Math.floor(Math.random() * array.length)
    result[i] = array[r]
    array.splice(r, 1)
  }
  return result
}