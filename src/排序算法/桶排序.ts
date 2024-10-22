function bucketSort(list: number[], bucketSize: number) {
    let min: number = list[0];
    let max: number = list[0];
    list.forEach(item => {
        if (item < min) {
            min = item;
        } else if (item > max) {
            max = item;
        }
    })
    const bucketNum = Math.floor((max - min) / bucketSize)
    const buckets = new Array(bucketNum);
    // 将元素分配到桶中
    for (let i = 0; i < list.length; i++) {
        const bucketIndex = Math.floor((list[i] - min) / bucketSize);
        if (!buckets[bucketIndex]) {
            buckets[bucketIndex] = []
        }
        buckets[bucketIndex].push(list[i]);
    }
    // 给每个桶排序，这里用的插入排序
    const sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i]) {
            const bucketArr:number[] = Array.from(buckets[i])
            for (let a = 1; a < bucketArr.length; a++) {
                let b = a - 1;
                let cur = bucketArr[a];
                while (b >= 0 && bucketArr[b] > cur) {
                    bucketArr[b + 1] = bucketArr[b];
                    b--;
                }
                bucketArr[b + 1] = cur;
            }
            sortedArray.push(...bucketArr);
        }
    }
    return sortedArray
}

const arr = [4, 2, 1, 4, 5, 6, 1, 9]
console.log(bucketSort(arr, 5));
export { }