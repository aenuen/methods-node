import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { time_object } from '../time/object'
import { date_apartDate } from './apartDate'
import { date_weekSunday } from './weekSunday'

/**
 * 获取日期一周的日期
 * @param value
 * @returns {array}
 */
export function date_oneWeek(value) {
  const functionName = 'date' + '_' + 'oneWeek'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeObject = time_object(value)
  type_date(timeObject) || throw_type(functionName, 'value', '有效的时间')
  // 开始处理
  let array = []
  const getWeekSunday = date_weekSunday(value)
  for (let i = 0; i < 7; i++) array.push(date_apartDate(getWeekSunday, i))
  return array
}