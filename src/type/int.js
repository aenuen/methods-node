import {throw_empty} from "../throw/empty"
import {type_number} from "./number"

/**
 * 是否整数类型
 * @param value
 * @returns boolean
 */
export function type_int(value) {
    const functionName = "type" + "_" + "int"
    arguments.length === 0 && throw_empty(functionName, "value")
    return type_number(value) && value % 1 === 0
}