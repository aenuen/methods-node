import {throw_empty} from "../throw/empty"

/**
 * 是否数组类型
 * @param value
 * @returns {boolean}
 */
export function type_array(value) {
    const functionName = "type" + "_" + "array"
    arguments.length === 0 && throw_empty(functionName, "value")
    // 开始处理
    return Object.prototype.toString.call(value).toLowerCase() === "[object array]"
}