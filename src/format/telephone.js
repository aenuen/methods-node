import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 是否 telephone 格式
 * @param value
 * @returns {boolean}
 */
export function format_telephone(value) {
    const functionName = "format" + "_" + "telephone"
    arguments.length === 0 && throw_empty(functionName, "value")
    type_string(value) || throw_type(functionName, "value", "string")
    // 开始处理
    return /^[0-9-()]{5,18}$/.test(value)
}