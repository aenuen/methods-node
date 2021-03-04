import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 是否外链格式
 * @param value
 * @returns {boolean}
 */
export function format_external(value) {
    const functionName = "format" + "_" + "external"
    arguments.length === 0 && throw_empty(functionName, "value")
    type_string(value) || throw_type(functionName, "value", "string")
    // 开始处理
    return /^(https?:|mailto:|tel:)/.test(value)
}