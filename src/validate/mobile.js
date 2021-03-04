import {throw_empty} from "../throw/empty"
import {format_mobile} from "../format/mobile"
import {type_json} from "../type/json"
import {throw_type} from "../throw/type"

/**
 * 有效的手机号码
 * @param value
 * @param callback
 * @returns callback
 */
export function validate_mobile(value, callback) {
    const functionName = "validate" + "_" + "mobile"
    arguments.length === 0 && throw_empty(functionName, "value")
    arguments.length === 1 && throw_empty(functionName, "callback")
    // 开始处理
    if (!value) {
        return callback(new Error("手机号码不能为空"))
    } else if (format_mobile(value)) {
        return callback()
    } else {
        return callback(new Error("请输入正确的手机号码"))
    }
}