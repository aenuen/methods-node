import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 进行 urlCode 编码
 * @param {number|string} string
 * @returns {number|string}
 */
export function urlCode_encode(string) {
    const functionName = "urlCode" + "_" + "encode"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    // 开始处理
    return encodeURIComponent(string)
}