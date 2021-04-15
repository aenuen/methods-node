import { time_agoCn } from '../src/time/agoCn'
import { time_agoEn } from '../src/time/agoEn'
import { time_array } from '../src/time/array'
import { time_diff } from '../src/time/diff'
import { time_format } from '../src/time/format'
import { time_object } from '../src/time/object'
import { time_secondShow } from '../src/time/secondShow'
import { time_short } from '../src/time/short'
import { time_stamp } from '../src/time/stamp'
import {
  time_text_date,
  time_text_full,
  time_text_hour,
  time_text_time,
  time_text_week
} from '../src/time/text'

export function _time_agoCn(value, format, zero) {
  return time_agoCn(value, format, zero)
}

export function _time_agoEn(value, format, zero) {
  return time_agoEn(value, format, zero)
}

export function _time_array(value) {
  return time_array(value)
}

export function _time_diff(timeOne, timeTwo, abs) {
  return time_diff(timeOne, timeTwo, abs)
}

export function _time_format(value, format, zero) {
  return time_format(value, format, zero)
}

export function _time_object(value) {
  return time_object(value)
}

export function _time_secondShow(value) {
  return time_secondShow(value)
}

export function _time_short(value) {
  return time_short(value)
}

export function _time_stamp(value) {
  return time_stamp(value)
}

export const _time_text_date = time_text_date
export const _time_text_full = time_text_full
export const _time_text_hour = time_text_hour
export const _time_text_time = time_text_time
export const _time_text_week = time_text_week
