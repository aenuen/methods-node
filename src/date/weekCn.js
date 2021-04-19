import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { time_array } from '../time/array'
import { some_weekCn } from '../some/weekCn'

/**
 * 获取一个时间的周几，如无参数则为当前星期几（中文）
 * @param value
 * @returns {string|number}
 */
export function date_weekCn(value) {
  const functionName = 'date' + '_' + 'weekCn'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeArray = time_array(value)
  timeArray === null && throw_type(functionName, 'value', '有效的时间')
  return some_weekCn(timeArray['w'])
}