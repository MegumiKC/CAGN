function insertSort(list: number[]): number[] {
  for (let i = 1; i < list.length; i++) {
    let temp = list[i];
    let j = i - 1;
    while (j > -1 && temp < list[j]) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = temp;
  }
  return list;
}
const arr = [1, 321, 45, 1, 3, 4, 2, 5, 6, 3, 1, 6, 2, 9, 4];
console.log(insertSort(arr));
export {};
