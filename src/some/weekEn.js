import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'

/**
 * 根据数字计算星期几（英文）
 * @param {number|string} week
 * @returns {string}
 */
export function some_weekEn(week) {
  const functionName = 'some' + '_' + 'weekEn'
  arguments.length === 0 && throw_empty(functionName, 'week')
  type_number(value) || throw_type(functionName, 'week', 'number')
  week >= 1 && week <= 6 || throw_type(functionName, 'week', '0-6的整数')
  // 开始处理
  const weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return weekArray[week]
}