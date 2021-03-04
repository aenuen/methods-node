import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 字符串中保留数字
 * @param {number|string} string
 * @returns {string}
 */
export function hold_number(string) {
    const functionName = "hold" + "_" + "number"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    // 开始处理
    return string.toString().replace(/[^0-9]/g, "")
}