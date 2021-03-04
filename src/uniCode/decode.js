import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 进行 uniCode 解码
 * @param {number|string} string
 * @returns {number|string}
 */
export function uniCode_decode(string) {
    const functionName = "uniCode" + "_" + "decode"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    // 开始处理
    return unescape(string.replace(/\\/g, "%"))
}