import {throw_empty} from "../throw/empty"

/**
 * 是否标志类型
 * @param value
 * @returns {boolean}
 */
export function type_symbol(value) {
    const functionName = "type" + "_" + "symbol"
    arguments.length === 0 && throw_empty(functionName, "value")
    return Object.prototype.toString.call(value).toLowerCase() === "[object symbol]"
}