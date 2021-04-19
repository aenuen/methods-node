import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_date } from '../type/date'
import { time_format } from '../time/format'
import { time_object } from '../time/object'
import { time_text_monthHead } from '../time/text'

/**
 * 获取日期的月头日期
 * @param value
 * @returns {string}
 */
export function date_monthHead(value) {
  const functionName = 'date' + '_' + 'monthHead'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeObject = time_object(value)
  type_date(timeObject) || throw_type(functionName, 'value', '有效的时间')
  // 开始处理
  return time_format(timeObject, time_text_monthHead, true)
}