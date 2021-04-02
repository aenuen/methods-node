import { throw_empty } from '../throw/empty'

/**
 * 是否json类型
 * @param value
 * @returns {boolean}
 */
export function type_json(value) {
  const functionName = 'type' + '_' + 'json'
  arguments.length === 0 && throw_empty(functionName, 'value')
  return Object.prototype.toString.call(value).toLowerCase() === '[object object]'
}