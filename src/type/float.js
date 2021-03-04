import {throw_empty} from "../throw/empty"
import {type_number} from "./number"

/**
 * 是否浮点类型
 * @param value
 * @returns {boolean}
 */
export function type_float(value) {
    const functionName = "type" + "_" + "float"
    arguments.length === 0 && throw_empty(functionName, "value")
    // 开始处理
    return type_number(value) && value % 1 !== 0
}