import {throw_empty} from "../throw/empty"
import {type_int} from "./int"

/**
 * 是否正整数
 * @param value
 * @returns {boolean}
 */
export function type_intPos(value) {
    const functionName = "type" + "_" + "intPos"
    arguments.length === 0 && throw_empty(functionName, "value")
    return type_int(value) && value > 0
}