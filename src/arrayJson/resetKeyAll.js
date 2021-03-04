import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_array} from "../type/array"
import {type_json} from "../type/json"

/**
 * 重置 arrayJson 的 key (全部）
 * @param {[]|{}} arrayJson
 * @returns {[]}
 */
export function arrayJson_resetKeyAll(arrayJson) {
    const functionName = "arrayJson" + "_" + "resetKeyAll"
    arguments.length === 0 && throw_empty(functionName, "arrayJson")
    const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
    typeArray || typeJson || throw_type(functionName, "arrayJson", "array|json")
    // 开始处理
    let count = 0
    let result = []
    Object.keys(arrayJson).forEach((key) => {
        result[count] = type_array(arrayJson[key]) || type_json(arrayJson[key]) ?
            arrayJson_resetKeyAll(arrayJson[key]) : arrayJson[key]
        count++
    })
    return result
}