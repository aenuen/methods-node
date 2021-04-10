import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { type_string } from '../type/string'

/**
 * 如果时间是复数，则显示复数标签
 * @param {number|string} time
 * @param {string} label
 * @return {string}
 */
export function time_pluralize(time, label) {
    const functionName = 'time' + '_' + 'pluralize'
    arguments.length === 0 && throw_empty(functionName, 'time')
    type_number(time) || type_string(time) || throw_type(functionName, 'time', '数字类型')
    arguments.length === 1 && throw_empty(functionName, 'label')
    type_string(label) || throw_type(functionName, 'time', '字符类型')
    // 开始处理
    return time === 1 ? time + label : time + label + 's'
}