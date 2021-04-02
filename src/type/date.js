import { throw_empty } from '../throw/empty'

/**
 * 是否日期对象
 * @param value
 * @returns {boolean}
 */
export function type_date(value) {
  const functionName = 'type' + '_' + 'date'
  arguments.length === 0 && throw_empty(functionName, 'value')
  // 开始处理
  return value instanceof Date && !isNaN(value.getTime())
}