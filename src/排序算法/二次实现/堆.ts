// 最大堆
function heapify(list: any, index: any, len: any) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let maxIndex = index;
    if (list[left] > list[maxIndex] && left < len) {
        maxIndex = left;
    }
    if (list[right] > list[maxIndex] && right < len) {
        maxIndex = right;
    }
    if (maxIndex !== index) {
        [list[maxIndex], list[index]] = [list[index], list[maxIndex]]
        heapify(list, maxIndex, len)
    }
    return list
}

function heapSort(list: any) {
    // 构造最大推
    for (let i = Math.floor(list.length/2) - 1; i >= 0; i--) {
        heapify(list, i, list.length)
    }
    // 交换堆顶元素和堆底元素，并重新调整大根堆
    for (let j = list.length - 1; j > 0; j--) {
        [list[0], list[j]] = [list[j], list[0]]
        heapify(list, 0, j)
    }
    return list
}

const list = [
    24, 23125, 121, 541, 5, 7, 1, 1, 3, 1, 51, 3125, 12, 10, 30, 764, 9, 60, 66,
    98, 188,
];
console.log(heapSort(list));
export { }