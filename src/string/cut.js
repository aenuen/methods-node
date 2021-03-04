import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_number} from "../type/number"
import {type_string} from "../type/string"

/**
 * 字符串截取
 * @param {number|string} string
 * @param {number|string} number
 * @returns {string}
 */
export function string_cut(string, number) {
    const functionName = "string" + "_" + "cut"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    arguments.length === 1 && throw_empty(functionName, "number")
    type_number(number) || throw_type(functionName, "number", "number")
    // 开始处理
    string = string.toString()
    number = parseInt(number)
    const have = string.substr(0, number - 1) + "…", none = string.substr(0, number)
    return string.length > number ? have : none
}