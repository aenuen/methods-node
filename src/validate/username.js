import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_json} from "../type/json"
import {format_username} from "../format/username"

/**
 * 有效的用户名
 * @param value
 * @param callback
 * @param config
 * @returns callback
 */
export function validate_username(value, callback, config) {
    const functionName = "validate" + "_" + "username"
    arguments.length === 0 && throw_empty(functionName, "value")
    arguments.length === 1 && throw_empty(functionName, "callback")
    arguments.length === 2 && throw_empty(functionName, "config")
    type_json(config) || throw_type(functionName, "config", "json")
    // 开始处理
    const uMin = config["usernameMin"] ? config["usernameMin"] : 5
    const uMax = config["usernameMax"] ? config["usernameMax"] : 30
    if (!value) {
        return callback(new Error("用户名不能为空"))
    } else if (format_username(value)) {
        const length = value.length
        if (length < uMin || length > uMax) {
            return callback(new Error(`用户名在${uMin}-${uMax}个字符之间`))
        } else {
            return callback()
        }
    } else {
        return callback(new Error("请输入正确的用户名"))
    }
}