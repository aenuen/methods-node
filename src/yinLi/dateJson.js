import {throw_empty} from "../throw/empty"
import {throw_type} from "../throw/type"
import {format_date} from "../format/date"
import {yinLi_data} from "./data"
import {type_json} from "../type/json"

/**
 * 生成阴历日期
 * @param {string|"yyyy-mm-dd"} date
 * @return {{}|{month: number, year: number, day: number}}
 */
export function yinLi_dateJson(date) {
    const functionName = "yinLi" + "-" + "dateJson"
    arguments.length === 0 && throw_empty(functionName, "date")
    format_date(date) || throw_type(functionName, "date", "有效的时间")
    // 开始处理
    let year, month, day
    let dateArray = date.split("-")
    year = parseInt(dateArray[0])
    month = dateArray[1] - 1
    day = parseInt(dateArray[2])
    const yinLiData = yinLi_data()
    if (year < 1921 || year > 2100) return {}
    let total, m, n, k, bit, lunarYear, lunarMonth, lunarDay, isEnd = false, temp = year
    temp < 1900 && (temp += 1900)
    total = (temp - 1921) * 365 + Math.floor((temp - 1921) / 4) + yinLiData.monthAdd[month] + day - 38
    year % 4 === 0 && month > 1 && total++
    for (m = 0; ; m++) {
        k = (yinLiData.calendar[m] < 0xfff) ? 11 : 12
        for (n = k; n >= 0; n--) {
            bit = (yinLiData.calendar[m] >> n) & 1
            if (total <= 29 + bit) {
                isEnd = true
                break
            }
            total = total - 29 - bit
        }
        if (isEnd) {
            break
        }
    }
    lunarYear = 1921 + m
    lunarMonth = k - n + 1
    lunarDay = total
    if (k === 12) {
        if (lunarMonth === Math.floor(yinLiData.calendar[m] / 0x10000) + 1) {
            lunarMonth = 1 - lunarMonth
        }
        if (lunarMonth > Math.floor(yinLiData.calendar[m] / 0x10000) + 1) {
            lunarMonth--
        }
    }
    return {
        year: lunarYear,
        month: lunarMonth,
        day: lunarDay,
    }
}