import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 是否含有中文
 * @param {number|string} value
 * @return {boolean}
 */
export function have_cn(value) {
    const functionName = "have" + "_" + "cn"
    arguments.length === 0 && throw_empty(functionName, "value")
    type_string(value) || throw_type(functionName, "value", "string")
    // 开始处理
    return /[\u4e00-\u9fa5]+/.test(value.toString())
}