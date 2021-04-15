import { throw_empty } from '../throw/empty'
import { time_array } from './array'
import { time_diff } from './diff'
import { time_format } from './format'

/**
 * 短时间
 * @param {*} value
 * @returns {string}
 */
export function time_short(value) {
  const functionName = 'time' + '_' + 'short'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeArray = time_array(value)
  timeArray === null && throw_type(functionName, 'value', '有效的时间')
  // 开始处理
  const thisArray = time_array(new Date())
  const dateOne = `${timeArray.y}-${timeArray.m}-${timeArray.d}`
  const dateTwo = `${thisArray.y}-${thisArray.m}-${thisArray.d}`
  const diff = +(time_diff(dateOne, dateTwo, false))
  const time = 86400
  return diff === time * 2 ? '后天 ' + time_format(value, '{h}:{i}', true) :
    diff === time ? '明天 ' + time_format(value, '{h}:{i}', true) :
      diff === 0 ? time_format(value, '{h}:{i}', true) :
        diff === -time ? '昨天 ' + time_format(value, '{h}:{i}', true) :
          diff === -time * 2 ? '前天 ' + time_format(value, '{h}:{i}', true) :
            timeArray.y === thisArray.y ? time_format(value, '{m}-{d} {h}:{i}', true) :
              time_format(value, '{y}-{m}-{d} {h}:{i}', true)
}
