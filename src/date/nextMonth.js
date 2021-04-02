import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { time_object } from '../time/object'
import { date_apartDate } from './apartDate'
import { date_month } from './month'
import { date_monthFoot } from './monthFoot'
import { date_year } from './year'

/**
 * 获取日期下月的年份和月份
 * @param value
 * @returns {array}
 */
export function date_nextMonth(value) {
  const functionName = 'date' + '_' + 'nextMonth'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeObject = time_object(value)
  type_date(timeObject) || throw_type(functionName, 'value', '有效的时间')
  // 开始处理
  const apart_date = date_apartDate(date_monthFoot(value), 1)
  return [date_year(apart_date), date_month(apart_date)]
}