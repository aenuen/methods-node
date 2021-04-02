import { throw_empty } from '../throw/empty'

/**
 * 是否函数类型
 * @param value
 * @returns {boolean}
 */
export function type_function(value) {
  const functionName = 'type' + '_' + 'function'
  arguments.length === 0 && throw_empty(functionName, 'value')
  // 开始处理
  return Object.prototype.toString.call(value).toLowerCase() === '[object function]'
}