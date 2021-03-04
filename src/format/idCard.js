import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 是否 idCard 格式
 * @param value
 * @returns {boolean}
 */
export function format_idCard(value) {
    const functionName = "format" + "_" + "idCard"
    arguments.length === 0 && throw_empty(functionName, "value")
    type_string(value) || throw_type(functionName, "value", "string")
    // 开始处理
    return /^[1-9](\d{14}|\d{16}[0-9x])$/i.test(value)
}