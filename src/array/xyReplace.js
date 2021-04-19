import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'

/**
 * 获取 array 的 xy 等比对换
 * @param {array} array [[],[],...]
 * @example array_xyReplace([[1,'a'],[2,'b'],[3,'c'],[4,'d']])
 * @returns {array}
 */
export function array_xyReplace(array) {
  const functionName = 'array' + '_' + 'xyReplace'
  arguments.length === 0 && throw_empty(functionName, 'array')
  type_array(array) || throw_type(functionName, 'array', 'array')
  const length = array.length
  length === 0 || length === 1 && throw_type(functionName, 'array', '有效的数组')
  for (let i = 1; i < length; i++) {
    type_array(array[i]) || throw_type(functionName, 'array 的第' + (i + 1) + '个元素', 'array')
    array[i].length === 0 && throw_empty(functionName, 'array的第' + (i + 1) + '个元')
  }
  // 开始处理
  let result = [], count = 0
  for (let o = 0; o < length; o++) count < array[o].length && (count = array[o].length)
  for (let t = 0; t < count; t++) {
    let newArray = []
    for (let i = 0; i < length; i++) array[i][t] === void 0 && (array[i][t] = ''), newArray.push(array[i][t])
    result.push(newArray)
  }
  return result
}