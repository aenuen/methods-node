import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 字符串中保留数字和点
 * @param {number|string} string
 * @returns {string}
 */
export function hold_numberAndDot(string) {
    const functionName = "hold" + "_" + "numberAndDot"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    // 开始处理
    return string.toString().replace(/[^\d.]/g, "")
}