/**
 * 取随机颜色
 * @returns {string}
 */
export function some_randomColor() {
    const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let string = ""
    for (let i = 0; i < 6; i++) {
        let id = Math.ceil(Math.random() * 15)
        string += array[id]
    }
    return "#" + string
}