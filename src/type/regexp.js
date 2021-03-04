import {throw_empty} from "../throw/empty"

/**
 * 是否正则表达式类型
 * @param value
 * @returns {boolean}
 */
export function type_regexp(value) {
    const functionName = "type" + "_" + "regexp"
    arguments.length === 0 && throw_empty(functionName, "value")
    return Object.prototype.toString.call(value).toLowerCase() === "[object regexp]"
}