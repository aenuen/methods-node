import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { time_object } from '../time/object'
import { date_apartDate } from './apartDate'
import { date_monthFoot } from './monthFoot'
import { date_oneWeek } from './oneWeek'

/**
 * 获取日期当月的日期
 * @param value
 * @returns {array}
 */
export function date_oneMonth(value) {
  const functionName = 'date' + '_' + 'oneMonth'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeObject = time_object(value)
  type_date(timeObject) || throw_type(functionName, 'value', '有效的时间')
  // 开始处理
  const array = []
  const monthFoot = date_monthFoot(value)
  const oneWeek = date_oneWeek(monthFoot)
  array.push(oneWeek)
  for (let i = 0; i < 6; i++) {
    const apartDate = date_apartDate(oneWeek[0], -(i * 7 + 1))
    if (new Date(apartDate).getMonth() + 1 !== timeObject.getMonth() + 1) break
    const ow = date_oneWeek(apartDate)
    array.unshift(ow)
  }
  return array
}