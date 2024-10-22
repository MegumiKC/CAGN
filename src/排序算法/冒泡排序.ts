// 冒泡排序：稳定，时间复杂度O(n2)
function bulbleSort(list: number[]) {
    let temp;
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list
}

const list = [1,1412,31,31455,12,11,1,0,7,4,2,2,61,24,1,651,1351]
console.log(bulbleSort(list));
export{}