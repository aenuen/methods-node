import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 是否 ip 格式
 * @param value
 * @returns {boolean}
 */
export function format_ip(value) {
    const functionName = "format" + "_" + "ip"
    arguments.length === 0 && throw_empty(functionName, "value")
    type_string(value) || throw_type(functionName, "value", "string")
    // 开始处理
    return /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(value)
        && RegExp.$1 < 256
        && RegExp.$2 < 256
        && RegExp.$3 < 256
        && RegExp.$4 < 256
}