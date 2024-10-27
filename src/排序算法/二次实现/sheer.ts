function seeleSort(list: number[]): number[] {
  let len = list.length;
  for (let gap = Math.floor(len/2); gap > 0; gap = Math.floor(gap/2)) {
    for (let i = gap; i < len; i++) {
      let j = i-gap;
      let temp = list[i];
      while (j  > -1 && temp < list[j]) {
        list[j+gap] = list[j];
        j -= gap;
      }
      list[j+gap] = temp;
    }
  }
  return list;
}

const arr = [1, 2, 3, 4, 1, 65, 13, 6, 1, 6, 46, 7, 1, 3];
console.log(seeleSort(arr));
export {};
