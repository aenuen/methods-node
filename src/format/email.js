import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 是否 email格式
 * @param value
 * @returns {boolean}
 */
export function format_email(value) {
    const functionName = "format" + "_" + "email"
    arguments.length === 0 && throw_empty(functionName, "value")
    type_string(value) || throw_type(functionName, "value", "string")
    // 开始处理
    return /^[a-z]+[a-z0-9]+[-_.]*[a-z0-9]+@[a-z0-9]+(([.\-])[a-z0-9]+)*\.[a-z0-9]+$/i.test(value)
}