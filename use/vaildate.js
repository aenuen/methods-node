import { validate_account } from '../src/validate/account'
import { validate_authCode } from '../src/validate/authCode'
import { validate_email } from '../src/validate/email'
import { validate_mobile } from '../src/validate/mobile'
import { validate_password } from '../src/validate/password'
import { validate_username } from '../src/validate/username'

export function _validate_account(value, callback, config) {
  return validate_account(value, callback, config)
}

export function _validate_authCode(value, callback, config) {
  return validate_authCode(value, callback, config)
}

export function _validate_email(value, callback, config) {
  return validate_email(value, callback, config)
}

export function _validate_mobile(value, callback) {
  return validate_mobile(value, callback)
}

export function _validate_password(value, callback, config) {
  return validate_password(value, callback, config)
}

export function _validate_username(value, callback, config) {
  return validate_username(value, callback, config)
}