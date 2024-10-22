function countingSort(list: number[], maxValue: number) {
    let listCount = new Array(maxValue).fill(0);
    let index = 0;
    list.forEach(item => {
        listCount[item]++;
    })
    for (let i = 0; i < listCount.length; i++) {
        while (listCount[i]) {
            list[index++] = i;
            listCount[i]--;
        }
    }
    return list
}

function countMax(list: number[]) {
    let max = 0;
    list.forEach(item => {
        if (item > max) max = item;
    })
    return max
}
const arr = [4, 2, 1, 4, 5, 6, 1, 9]
console.log(countingSort(arr, countMax(arr)));
export { }