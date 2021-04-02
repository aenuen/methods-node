import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_array } from '../type/array'
import { type_json } from '../type/json'

/**
 * 删除 arrayJson 中的 assignKey 值
 * @param {[]|{}} arrayJson
 * @param {[]} assignKey
 * @return {[]|{}}
 */
export function arrayJson_deleteAssignKey(arrayJson, assignKey) {
  const functionName = 'arrayJson' + '_' + 'deleteAssignKey'
  arguments.length === 0 && throw_empty(functionName, 'arrayJson')
  const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
  typeArray || typeJson || throw_type(functionName, 'arrayJson', 'array|json')
  arguments.length === 1 && throw_empty(functionName, 'assignKey')
  type_array(assignKey) || throw_type(functionName, 'assignKey', 'array')
  // 开始处理
  const NAJ = JSON.parse(JSON.stringify(arrayJson))
  Object.keys(assignKey).forEach(key => delete NAJ[assignKey[key]])
  return NAJ
}