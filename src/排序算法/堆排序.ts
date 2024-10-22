// 构造最大堆
function heapify(list: number[], i: number, len: number) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let maxIndex = i;
    if (left < len && list[left] > list[maxIndex]) {
        maxIndex = left;
    }
    if (right < len && list[right] > list[maxIndex]) {
        maxIndex = right;
    }
    if (maxIndex !== i) {
        [list[i], list[maxIndex]] = [list[maxIndex], list[i]];
        heapify(list, maxIndex, len);
    }
}

function heapSort(list: number[]) {
    // 构建最大堆
    for (let i = Math.floor(list.length / 2)-1; i >= 0; i--) {
        heapify(list, i, list.length);
    }
    // 交换堆顶元素和堆底元素，重新调整堆
    for (let j = list.length - 1; j > 0; j--) {
        [list[0], list[j]] = [list[j], list[0]]
        heapify(list, 0, j)
    }
    return list
}

const arr = [4, 2, 1, 4, 5, 6, 1, 9]
console.log(heapSort(arr));
export { }