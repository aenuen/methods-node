import { date_apartDate } from '../src/date/apartDate'
import { date_apartMonth } from '../src/date/apartMonth'
import { date_day } from '../src/date/day'
import { date_diff } from '../src/date/diff'
import { date_month } from '../src/date/month'
import { date_monthFoot } from '../src/date/monthFoot'
import { date_monthHead } from '../src/date/monthHead'
import { date_nextMonth } from '../src/date/nextMonth'
import { date_oneMonth } from '../src/date/oneMonth'
import { date_oneWeek } from '../src/date/oneWeek'
import { date_prevMonth } from '../src/date/prevMonth'
import { date_today } from '../src/date/today'
import { date_week } from '../src/date/week'
import { date_weekSunday } from '../src/date/weekSunday'
import { date_year } from '../src/date/year'

export function _date_apartDate(value, number) {
  return date_apartDate(value, number)
}

export function _date_apartMonth(value, number) {
  return date_apartMonth(value, number)
}

export function _date_day(value) {
  return date_day(value)
}

export function _date_diff(dateOne, dateTwo, abs) {
  return date_diff(dateOne, dateTwo, abs)
}

export function _date_month(value) {
  return date_month(value)
}

export function _date_monthFoot(value) {
  return date_monthFoot(value)
}

export function _date_monthHead(value) {
  return date_monthHead(value)
}

export function _date_nextMonth(value) {
  return date_nextMonth(value)
}

export function _date_oneMonth(value) {
  return date_oneMonth(value)
}

export function _date_oneWeek(value) {
  return date_oneWeek(value)
}

export function _date_prevMonth(value) {
  return date_prevMonth(value)
}

export function _date_today() {
  return date_today()
}

export function _date_week(value) {
  return date_week(value)
}

export function _date_weekSunday(value) {
  return date_weekSunday(value)
}

export function _date_year(value) {
  return date_year(value)
}