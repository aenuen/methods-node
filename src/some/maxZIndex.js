/**
 * 最高的 z-index 值
 * @returns {string}
 */
export function some_maxZIndex() {
    return (new Date().getTime() / 1000).toFixed(0)
}