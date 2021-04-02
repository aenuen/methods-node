import { throw_empty } from '../throw/empty'
import { throw_type } from '../throw/type'
import { type_json } from '../type/json'
import { yinLi_data } from './data'

/**
 * 生成阴历说情
 * @param {json|{year:number,month:number,day:number}} dateJson
 * @return {{year: string,month: number,day: string,dz: string,tg: string,}}
 */
export function yinLi_detailJson(dateJson) {
  const functionName = 'yinLi' + '-' + 'stringJson'
  arguments.length === 0 && throw_empty(functionName, 'dateJson')
  type_json(dateJson) && dateJson['year'] && dateJson['month'] && dateJson['day'] || throw_type(functionName, 'date', '有效的时间')
  // 开始处理
  let data = {}, lunarYear = dateJson.year, lunarMonth = dateJson.month, lunarDay = dateJson.day
  const info = yinLi_data()
  data.tg = info.tg.charAt((lunarYear - 4) % 10)
  data.dz = info.dz.charAt((lunarYear - 4) % 12)
  data.year = info.year.charAt((lunarYear - 4) % 12)
  data.month = (lunarMonth < 1 ? '(闰)' + lunarMonth.charAt(-lunarMonth - 1) : info.month.charAt(lunarMonth - 1)) + '月'
  data.day = (lunarDay < 11) ? '初' : ((lunarDay < 20) ? '十' : ((lunarDay < 30) ? '廿' : '三十'))
  const number = lunarDay === 10 ? 10 : lunarDay.toString().substr(-1)
  let dayCn = info.number[number - 1]
  dayCn = dayCn || ''
  data.day += dayCn
  return data
}