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
export function arrayJson_repeatTwoOption(arrayJson, option) {
  const functionName = 'arrayJson' + '_' + 'repeatTwoOption'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'option')
  type_intPos(option) || throw_type(functionName, 'option', '正整数')
  option >= 1 && option <= 3 || throw_type(functionName, 'option', '1到3的正整数')
  // 开始处理
  let a = [], b = typeArray ? [] : {}
  for (let key in arrayJson) {
    if (arrayJson.hasOwnProperty(key)) {
      if (arrayJson_whetherIn(b, arrayJson[key], true)) {
        a.push(arrayJson[key])
      } else {
        typeArray ? b.push(arrayJson[key]) : b[key] = arrayJson[key]
      }
    }
  }
  let c = typeArray ? [] : {}, d = [], e = []
  for (let idx in arrayJson) {
    if (arrayJson.hasOwnProperty(idx)) {
      if (arrayJson_whetherIn(a, arrayJson[idx], true)) {
        e.push(idx)
      } else {
        d.push(idx)
        typeArray ? c.push(arrayJson[idx]) : c[idx] = arrayJson[idx]
      }
    }
  }
  return +option === 1 ? c : (+option === 2 ? d : e)
}
