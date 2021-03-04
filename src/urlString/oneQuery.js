import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"
import {urlString_queryJson} from "./queryJson"

/**
 * 从一个 urlString 中提取 oneQuery
 * @param {number|string} urlString
 * @param {number|string} name
 * @returns {null|*}
 */
export function urlString_oneQuery(urlString, name) {
    const functionName = "urlString" + "_" + "oneQuery"
    arguments.length === 0 && throw_empty(functionName, "urlString")
    type_string(urlString) || throw_type(functionName, "urlString", "string")
    arguments.length === 1 && throw_empty(functionName, "name")
    type_string(name) || throw_type(functionName, "name", "string")
    // 开始处理
    let json = urlString_queryJson(urlString)
    return !name || typeof json[name] === "undefined" ? null : json[name]
}