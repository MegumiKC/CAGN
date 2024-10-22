function insertSort(list: number[]) {
    for (let i = 1; i < list.length; i++) {
        let j = i - 1;
        let cur = list[i];
        while (j >= 0 && list[j] > cur) {
            list[j + 1] = list[j];
            j--;
        }
        list[j + 1] = cur;
    }
    return list
}

const arr = [4, 2, 1, 4, 5, 6, 1, 9]
console.log(insertSort(arr));
export { }