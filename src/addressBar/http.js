/**
 * http
 * @return {string}
 */
export function addressBar_http() {
  return 'https:' === document.location.protocol ? 'https://' : 'http://'
}