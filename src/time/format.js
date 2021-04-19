import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_string } from '../type/string'
import { type_boolean } from '../type/boolean'
import { time_array } from './array'

/**
 * 获取时间格式化
 * @param value
 * @param {"{y}-{m}-{d} {h}:{i}:{s} 星期{w}"|string} format
 * @param {boolean} addZero
 * @returns {string}
 */
export function time_format(value, format, addZero) {
  const functionName = 'time' + '_' + 'format'
  arguments.length === 0 && throw_empty(functionName, 'value')
  const timeArray = time_array(value)
  timeArray === null && throw_type(functionName, 'value', '有效的时间')
  arguments.length === 1 && throw_empty(functionName, 'format')
  type_string(format) || throw_type(functionName, 'format', 'string')
  arguments.length === 2 && throw_empty(functionName, 'addZero')
  type_boolean(addZero) || throw_type(functionName, 'addZero', 'boolean')
  // 开始处理
  return format.replace(/{([ymdhisw])+}/g, (result, key) => {
    const value = timeArray[key]
    return key === 'w' ? ['日', '一', '二', '三', '四', '五', '六'][value] :
      addZero ? value.toString().padStart(2, '0') : value.toString()
  })
}