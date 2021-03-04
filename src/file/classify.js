import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_string} from "../type/string"
import {file_suffixName} from "./suffixName"

/**
 * 从字符串中提取文件的后缀名并进行分类
 * @param {number|string} string
 * @returns {string}
 */
export function file_classify(string) {
    const functionName = "file" + "_" + "classify"
    arguments.length === 0 && throw_empty(functionName, "string")
    type_string(string) || throw_type(functionName, "string", "string")
    // 开始处理
    const suffixName = file_suffixName(string)
    const array = [
        {"n": "doc", "v": ["doc", "docx", "dot", "docx"]},
        {"n": "txt", "v": ["txt"]},
        {"n": "xls", "v": ["xls", "xlsx"]},
        {"n": "ppt", "v": ["ppt", "pptx"]},
        {"n": "pdf", "v": ["pdf"]},
        {"n": "htm", "v": ["htm", "html"]},
        {"n": "pic", "v": ["png", "jpg", "jpeg", "bmp", "gif"]},
        {
            "n": "vid",
            "v": ["avi", "rmvb", "rm", "mpg", "mpeg", "mpe", "wmv", "mp4", "mkv", "vob", "3gp", "mov"]
        },
        {"n": "aud", "v": ["wav", "mp3", "wma", "aif", "cda", "mid", "caf", "amr"]},
        {"n": "app", "v": ["exe", "app", "ipa", "apk"]},
        {"n": "zip", "v": ["zip", "rar"]}
    ]
    let tof = false
    let result = "other"
    for (let i = 0; i < array.length; i++) {
        for (let e = 0; e < array[i]['v'].length; e++) {
            if (suffixName.toLowerCase() === array[i]["v"][e].toLowerCase()) {
                result = array[i]["n"]
                tof = true
                break
            }
        }
        if (tof) {
            break
        }
    }
    return result
}