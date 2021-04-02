import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'
import { type_number } from '../type/number'
import { arrayJson_resetKeyOne } from './resetKeyOne'

/**
 * 将 arrayJson 进行分片，并存储在一个新数组
 * @param {[]|{}} arrayJson
 * @param {number|string} size
 * @returns {[]}
 */
export function arrayJson_chunk(arrayJson, size) {
  const functionName = 'arrayJson' + '_' + 'chunk'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'size')
  type_number(size) || throw_type(functionName, 'size', 'number')
  // 开始处理
  const array = typeArray ? arrayJson : arrayJson_resetKeyOne(arrayJson)
  const length = array.length
  size = parseInt(size)
  if (length < 1 || size < 1) return []
  let index = 0, resIndex = 0, result = new Array(Math.ceil(length / size))
  while (index < length) result[resIndex++] = array.slice(index, (index += size))
  return result
}