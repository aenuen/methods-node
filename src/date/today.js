import { time_format } from '../time/format'

/**
 * 今天日期
 * @returns {string}
 */
export function date_today() {
  return time_format(new Date(), '{y}-{m}-{d}', true)
}