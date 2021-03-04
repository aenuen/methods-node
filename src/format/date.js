import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"
import {some_yearMonthDays} from "../some/yearMonthDays"

/**
 * 是否 date 格式
 * @param value
 * @returns {boolean}
 */
export function format_date(value) {
    const functionName = "format" + "_" + "date"
    arguments.length === 0 && throw_empty(functionName, "value")
    type_string(value) || throw_type(functionName, "value", "string")
    // 开始处理
    return /^(\d{4})-(\d{2})-(\d{2})$/.test(value.toString())
        && RegExp.$2 > 0
        && RegExp.$2 <= 12
        && RegExp.$3 > 0
        && RegExp.$3 <= some_yearMonthDays(RegExp.$1, RegExp.$2)
}