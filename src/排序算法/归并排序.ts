function mergeSort(list: number[]): any[] {
    const merge = function (left: number[], right: number[]) {
        let result = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] > right[0]) {
                result.push(right.shift())
            } else {
                result.push(left.shift())
            }
        }
        while (left.length) {
            result.push(left.shift())
        }
        while (right.length) {
            result.push(right.shift())
        }
        return result
    }
    if (list.length <= 1) {
        return list
    }
    let middle = Math.floor(list.length / 2)
    let left = list.slice(0, middle);
    let right = list.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
const arr = [4, 2, 1, 4, 5, 6, 1, 9]
console.log(mergeSort(arr));
export { }