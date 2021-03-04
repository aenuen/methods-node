import {type_string} from "../type/string"
import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"

/**
 * 去除字符串右侧的所有空格
 * @param {number|string} string
 * @return {number|string}
 */
export function trim_right(string) {
    const functionName = "trim" + "_" + "right"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    // 开始处理
    return string.toString().replace(/(\s*$)/g, "")
}