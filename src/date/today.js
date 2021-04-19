import { time_format } from '../time/format'
import { time_text_date } from '../time/text'

/**
 * 今天日期
 * @returns {string}
 */
export function date_today() {
  return time_format(new Date(), time_text_date, true)
}