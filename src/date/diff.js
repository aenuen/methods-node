import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { time_object } from '../time/object'

/**
 * 两个日期相差多少天
 * @param dateOne
 * @param dateTwo
 * @returns {string|number}
 */
export function date_diff(dateOne, dateTwo) {
  const functionName = 'date' + '_' + 'diff'
  arguments.length === 0 && throw_empty(functionName, 'dateOne')
  const dateOneObject = time_object(dateOne)
  type_date(dateOneObject) || throw_type(functionName, 'dateOne', '有效的时间')
  arguments.length === 1 && throw_empty(functionName, 'dateTwo')
  const dateTwoObject = time_object(dateTwo)
  type_date(dateTwoObject) || throw_type(functionName, 'dateTwo', '有效的时间')
  // 开始处理
  return (Math.abs(dateOneObject - dateTwoObject) / (1000 * 24 * 60 * 60)).toFixed(0)
}