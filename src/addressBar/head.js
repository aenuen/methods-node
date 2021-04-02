import { addressBar_http } from './http'
import { addressBar_host } from './host'

/**
 * http(s)://域名：端口
 * @return {string}
 */
export function addressBar_head() {
  return addressBar_http() + addressBar_host()
}