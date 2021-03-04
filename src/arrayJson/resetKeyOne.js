import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_array} from "../type/array"
import {type_json} from "../type/json"

/**
 * 重置 arrayJson 的 key （单层）
 * @param {[]|{}} arrayJson
 * @returns {[]}
 */
export function arrayJson_resetKeyOne(arrayJson) {
    const functionName = "arrayJson" + "_" + "resetKeyOne"
    arguments.length === 0 && throw_empty(functionName, "arrayJson")
    const typeArray = type_array(arrayJson), typeJson = type_json(arrayJson)
    typeArray || typeJson || throw_type(functionName, "arrayJson", "array|json")
    // 开始处理
    let result = []
    Object.keys(arrayJson).forEach((key) => {
        result.push(arrayJson[key])
    })
    return result
}