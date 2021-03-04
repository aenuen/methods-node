/**
 * query
 * @return {string}
 */
export function addressBar_query() {
    return location.search.substr(1) /*去除问号*/
}