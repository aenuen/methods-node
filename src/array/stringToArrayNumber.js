import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_number} from "../type/number"
import {type_string} from "../type/string"

/**
 * 以 number 分隔 string 组成新的 array
 * @param {number|string} string 要分隔的字符串
 * @param {number|string} number 多少数量
 * @returns {array}
 */
export function array_stringToArrayNumber(string, number) {
    const functionName = "array" + "_" + "stringToArrayNumber"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    arguments.length === 1 && throw_empty(functionName, "number")
    type_number(number) || throw_type(functionName, "number", "number")
    // 开始处理
    string = string.toString()
    const array = [], length = Math.ceil(string.length / number)
    for (let i = 0; i < length; i++) array.push(string.substr(i * number, parseInt(number)))
    return array
}