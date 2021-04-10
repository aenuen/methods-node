import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_number } from '../type/number'
import { type_string } from '../type/string'
import { time_pluralize } from './pluralize'

/**
 * 多少单位以前，// ~~转数字型，保留整数
 * @param {number|string} time
 * @return {string}
 */
export function time_unitAgo(time) {
    const functionName = 'time' + '_' + 'unitAgo'
    arguments.length === 0 && throw_empty(functionName, 'time')
    type_number(time) || type_string(time) || throw_type(functionName, 'time', '数字类型')
    // 开始处理
    const between = Date.now() / 1000 - Number(time)
    if (between < 3600) {
        return time_pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
        return time_pluralize(~~(between / 3600), ' hour')
    } else {
        return time_pluralize(~~(between / 86400), ' day')
    }
}