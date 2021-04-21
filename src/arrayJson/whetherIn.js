import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_boolean } from '../type/boolean'
import { type_json } from '../type/json'
import { arrayJson_resetKeyOne } from './resetKeyOne'

/**
 * 是否值在 arrayJson 中
 * @param {[]|{}} arrayJson
 * @param {*} value
 * @param {boolean} bigSmallWrite 是否区分大小写，true 为区分，false 为不区分，默认值为 false 不区分
 * @returns {boolean}
 */
export function arrayJson_whetherIn(arrayJson, value, bigSmallWrite) {
  const functionName = 'arrayJson' + '_' + 'whetherIn'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'value')
  arguments.length === 2 && throw_empty(functionName, 'bigSmallWrite')
  type_boolean(bigSmallWrite) || throw_type(functionName, 'bigSmallWrite', 'boolean')
  // 开始处理
  const newArray = arrayJson_resetKeyOne(arrayJson) // 函数 some 不能循环 json 类型，统一转成数组
  return newArray.some((key) => {
    let a = JSON.stringify(typeof key === 'number' ? '' + key : key)
    let b = JSON.stringify(typeof value === 'number' ? '' + value : value)
    bigSmallWrite === false && ((function() {
      a = a.toLowerCase()
      b = b.toLowerCase()
    })())
    return a === b
  })
}
