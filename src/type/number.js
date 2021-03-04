import {throw_empty} from "../throw/empty"

/**
 * 是否数字类型
 * @param value
 * @returns {boolean}
 */
export function type_number(value) {
    const functionName = "type" + "_" + "number"
    arguments.length === 0 && throw_empty(functionName, "value")
    return typeof value === "number" || (typeof value === "string" && !isNaN(value))
}