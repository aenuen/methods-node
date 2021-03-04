import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 是否含有特定字符
 * @param {number|string} value
 * @param {number|string} assign
 * @return {boolean}
 */
export function have_assign(value, assign) {
    const functionName = "have" + "_" + "assign"
    arguments.length === 0 && throw_empty(functionName, "value")
    type_string(value) || throw_type(functionName, "value", "string")
    arguments.length === 1 && throw_empty(functionName, "assign")
    type_string(assign) || throw_type(functionName, "assign", "string")
    // 开始处理
    return value.toString().indexOf(assign) >= 0
}