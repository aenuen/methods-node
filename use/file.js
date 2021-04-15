import { file_baseName } from '../src/file/baseName'
import { file_classify } from '../src/file/classify'
import { file_fullName } from '../src/file/fullName'
import { file_suffixName } from '../src/file/suffixName'
import { file_unit } from '../src/file/unit'

export function _file_baseName(string) {
  return file_baseName(string)
}

export function _file_classify(string) {
  return file_classify(string)
}

export function _file_fullName(string) {
  return file_fullName(string)
}

export function _file_suffixName(string) {
  return file_suffixName(string)
}

export function _file_unit(fileSize, fixed) {
  return file_unit(fileSize, fixed)
}