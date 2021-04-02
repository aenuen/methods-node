import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_boolean } from '../type/boolean'
import { type_json } from '../type/json'
import { arrayJson_whetherIn } from './whetherIn'

/**
 * 删除 arrayJson 中的 repeat 值
 * @param {[]|{}} arrayJson
 * @param {boolean|null} boolean true：重复的键值数组，false：不重复的键值数组，null：删除重复值后的 arrayJson
 * TA=typeArray,TJ=typeJSON,NAJ=newArrayJSON,
 * @returns {[]|{}}
 */
export function arrayJson_repeat(arrayJson, boolean) {
  const functionName = 'arrayJson' + '_' + 'repeat'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const TA = type_array(arrayJson), TJ = type_json(arrayJson)
  TA || TJ || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'boolean')
  type_boolean(boolean) || boolean === null || throw_type(functionName, 'boolean', 'boolean|null')
  // 开始处理
  let NAJ = TA ? [] : {}, IR = [], NR = []
  Object.keys(arrayJson).forEach(key => {
    if (arrayJson_whetherIn(NAJ, arrayJson[key], false)) {
      IR.push(key)
    } else {
      NR.push(key)
      TA ? NAJ.push(arrayJson[key]) : NAJ[key] = arrayJson[key]
    }
  })
  return type_boolean(boolean) ? (boolean === true ? IR : NR) : NAJ
}