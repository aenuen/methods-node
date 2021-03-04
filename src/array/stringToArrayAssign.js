import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 以 assign 分隔 string 组成新的 array
 * @param {number|string} string 要分隔的字符串
 * @param {number|string} assign 指定字符
 * @returns {array}
 */
export function array_stringToArrayAssign(string, assign) {
    const functionName = "array" + "_" + "stringToArrayNumber"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    arguments.length === 1 && throw_empty(functionName, "assign")
    type_string(assign) || throw_type(functionName, "assign", "string")
    // 开始处理
    return string.split(assign.toString())
}