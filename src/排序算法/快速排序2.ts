// left和rigth模式
function quickSort(list: number[], left: number, right: number) {
    let partitionIndex;
    left = typeof left != 'number' ? 0 : left;
    right = typeof right != 'number' ? 0 : right;
    const swap = function (list: number[], i: number, j: number) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
    const partition = function (list: number[], left: number, right: number) {
        let pivot = left;
        let index = pivot + 1;
        for (let i = index; i <= right; i++) {
            if (list[i] < list[pivot]) {
                swap(list, i, index);
                index++
            }
        }
        swap(list, pivot, index - 1);
        return index - 1
    }
    if (left < right) {
        partitionIndex = partition(list, left, right);
        quickSort(list, left, partitionIndex - 1);
        quickSort(list, partitionIndex + 1, right);
    }
    return list;
}
const arr = [4, 2, 1, 4, 5, 6, 1, 9]
console.log(quickSort(arr, 0, arr.length));
export{}