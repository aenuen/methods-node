import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"

/**
 * 清除代码中所有的 htmlTag
 * @param {number|string} htmlString
 * @returns {string}
 */
export function htmlTag_clean(htmlString) {
    const functionName = "htmlTag" + "_" + "clean"
    arguments.length === 0 && throw_empty(functionName, "htmlString")
    type_string(htmlString) || throw_type(functionName, "htmlString", "string")
    // 开始处理
    return htmlString.toString()
        .replace(/<[^>]+>/g, "")
}