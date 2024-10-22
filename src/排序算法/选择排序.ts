function selectionSort(list: number[]) {
    for (let i = 0; i < list.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }
        let item = list[minIndex];
        list[minIndex] = list[i];
        list[i] = item;
    }
    return list
}


const arr = [4, 2, 1, 4, 5, 6, 1, 9]
console.log(selectionSort(arr));
export { }