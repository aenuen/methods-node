import { throw_empty } from '../throw/empty'

/**
 * 是否布尔类型
 * @param value
 * @returns {boolean}
 */
export function type_boolean(value) {
  const functionName = 'type' + '_' + 'boolean'
  arguments.length === 0 && throw_empty(functionName, 'value')
  // 开始处理
  return Object.prototype.toString.call(value).toLowerCase() === '[object boolean]'
}