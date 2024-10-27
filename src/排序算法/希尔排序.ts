function shellSort(list: number[]) {
    let gap = Math.floor(list.length / 2);
    while (gap) {
        for (let i = gap; i < list.length; i++) {
            let cur = list[i];
            let j = i - gap;
            while (j >= 0 && list[j] > cur) {
                list[j + gap] = list[j];
                j -= gap;
            }
            list[j + gap] = cur;
        }
        gap = Math.floor(gap / 2)
    }
    return list
}
const arr = [1, 2, 3, 4, 1, 65, 13, 6, 1, 6, 46, 7, 1, 3];
console.log(shellSort(arr));

function insertSort(list: number[]) {
    for (let i = 1; i < list.length; i++) {
        let cur = list[i];
        let j = i - 1;
        while (j >= 0 && list[j] > cur) {
            list[j + 1] = list[j];
            j--;
        }
        list[j + 1] = cur;
    }
    return list
}
console.log(insertSort(arr));

export{}