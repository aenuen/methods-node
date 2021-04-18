import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_intPos } from '../type/intPos'
import { type_json } from '../type/json'
import { arrayJson_whetherIn } from './whetherIn'

/**
 * 删除 arrayJson 中的 repeat 值
 * @param {[]|{}} arrayJson
 * @param {int} option 1:不重复值的array|json,2:不重复的键值数组,3:重复的键值数组
 * @returns {[]|{}}
 */
export function arrayJson_repeatOneOption(arrayJson, option) {
  const functionName = 'arrayJson' + '_' + 'repeatOneOption'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'option')
  type_intPos(option) || throw_type(functionName, 'option', '正整数')
  option > 0 && option < 4 || throw_type(functionName, 'option', '正整的1到3')
  // 开始处理
  let a = typeArray ? [] : {}, b = [], c = []
  for (let key in arrayJson) {
    if (arrayJson.hasOwnProperty(key)) {
      if (arrayJson_whetherIn(a, arrayJson[key], false)) {
        c.push(key)
      } else {
        b.push(key)
        typeArray ? a.push(arrayJson[key]) : a[key] = arrayJson[key]
      }
    }
  }
  return +option === 1 ? a : (+option === 2 ? b : c)
}
