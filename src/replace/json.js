import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_json} from "../type/json"
import {type_string} from "../type/string"
import {replace_all} from "./all"

/**
 * 替换一些
 * @param {number|string} string
 * @param {json} json
 * @returns {number|string}
 */
export function replace_json(string, json) {
    const functionName = "replace" + "_" + "json"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    arguments.length === 1 && throw_empty(functionName, "json")
    type_json(json) || throw_type(functionName, "json", "json")
    // 开始处理
    Object.keys(json).forEach(key => {
        string = replace_all(string, key, json[key])
    })
    return string
}