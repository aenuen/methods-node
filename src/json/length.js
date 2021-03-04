import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_json} from "../type/json"

/**
 * 获取 json 长度
 * @param {json} json
 * @return {number}
 */
export function json_length(json) {
    const functionName = "json" + "_" + "length"
    arguments.length === 0 && throw_empty(functionName, "arrayJson")
    type_json(json) || throw_type(functionName, "json", "json")
    // 开始处理
    let calcLen = 0
    Object.keys(json).forEach(() => calcLen++)
    return calcLen
}