import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {type_json} from "../type/json"
import {yinLi_data} from "./data"
import {format_date} from "../format/date"

/**
 * 生成阴历说情
 * @param {json|{year:number,month:number,day:number}} dateJson
 * @return {{year: string,month: number,day: string,dz: string,tg: string,}}
 */
export function yinLi_detailJson(dateJson) {
    const functionName = "yinLi" + "-" + "stringJson"
    arguments.length === 0 && throw_empty(functionName, "dateJson")
    type_json(dateJson) && dateJson["year"] && dateJson["month"] && dateJson["day"] ||
    throw_type(functionName, "date", "有效的时间")
    // 开始处理
    let data = {},
        lunarYear = dateJson.year,
        lunarMonth = dateJson.month,
        lunarDay = dateJson.day
    const yinLiData = yinLi_data()
    data.tg = yinLiData.tg.charAt((lunarYear - 4) % 10)
    data.dz = yinLiData.dz.charAt((lunarYear - 4) % 12)
    data.year = yinLiData.year.charAt((lunarYear - 4) % 12)
    data.month = lunarMonth < 1 ? "(闰)" + yinLiData.month.charAt(-lunarMonth - 1) : yinLiData.month.charAt(lunarMonth - 1)
    data.day = (lunarDay < 11) ? "初" : ((lunarDay < 20) ? "十" : ((lunarDay < 30) ? "廿" : "三十"))
    lunarDay % 10 !== 0 || lunarDay === 10 && (data.day += yinLiData.number.charAt((lunarDay - 1) % 10))
    return data
}